import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import { auth } from '../../application/services/firebase/firebaseConfig';

interface UserInfo {
  name: string;
  email: string;
  picture: string;
}

interface AuthContextProps {
  usuario: User | null;
  userInfo: UserInfo | null;
  loading: boolean;
  error: string | null;
  logarComGoogle: () => Promise<void>;
  deslogar: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [usuario, setUsuario] = useState<User | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setLoading(true);
      setError(null);

      if (user) {
        try {
          const token = await user.getIdToken(true);
          localStorage.setItem('authToken', token);
          setUsuario(user);

          // Fetch user info (if needed)
          const userInfo = await fetchUserInfoFromFirebase(user);
          setUserInfo(userInfo);
        } catch (err) {
          console.error('Erro ao buscar informações do usuário:', err);
          setError('Erro ao carregar informações do usuário.');
        }
      } else {
        localStorage.removeItem('authToken');
        setUsuario(null);
        setUserInfo(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logarComGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    setError(null);
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Pega o accessToken do Google
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential?.accessToken;

      if (!accessToken) {
        throw new Error('Token de acesso não encontrado.');
      }

      // Salva o token no localStorage (opcional)
      localStorage.setItem('accessToken', accessToken);

      setUsuario(user);

      // Buscar informações do usuário com o accessToken
      const userInfo = await fetchUserInfo(accessToken);
      setUserInfo(userInfo);
    } catch (error) {
      console.error('Erro ao logar com Google:', error);
      setError('Erro ao autenticar com o Google.');
    } finally {
      setLoading(false);
    }
  };

  const deslogar = async () => {
    setError(null);
    try {
      await signOut(auth);
      localStorage.removeItem('authToken');
      localStorage.removeItem('accessToken');
      setUsuario(null);
      setUserInfo(null);
    } catch (error) {
      console.error('Erro ao deslogar:', error);
      setError('Erro ao deslogar.');
    }
  };

  const fetchUserInfo = async (token: string): Promise<UserInfo> => {
    try {
      const response = await fetch(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          console.error('Token expirado ou inválido.');
        }
        throw new Error('Erro ao buscar informações do usuário');
      }

      const data = await response.json();
      return {
        name: data.name,
        email: data.email,
        picture: data.picture,
      };
    } catch (error) {
      console.error('Erro ao buscar informações do usuário:', error);
      throw error;
    }
  };

  // Fetch user info from Firebase (fallback)
  const fetchUserInfoFromFirebase = async (user: User): Promise<UserInfo> => {
    return {
      name: user.displayName || 'Usuário',
      email: user.email || 'Email não disponível',
      picture: user.photoURL || '',
    };
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        userInfo,
        loading,
        error,
        logarComGoogle,
        deslogar,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
