import { http, HttpResponse } from 'msw';

type LoginRequestBody = {
  email: string;
  senha: string;
};

type LoginResponseBody = {
  id: number;
  nome: string;
  email: string;
  token: string;
  message?: string;
};

type GoogleLoginRequestBody = {
  token: string;
};

type GoogleLoginResponseBody = {
  id: number;
  nome: string;
  email: string;
  token: string;
};

type LogoutResponseBody = {
  message: string;
};

export const handlers = [
  // Mock do login
  http.post<
    {}, // Use {} para representar um objeto vazio nos PathParams
    LoginRequestBody,
    LoginResponseBody,
    '/auth/login'
  >('/auth/login', async ({ request }) => {
    const { email, senha } = await request.json();

    if (email === 'user@example.com' && senha === 'password123') {
      return HttpResponse.json(
        {
          id: 1,
          nome: 'User Example',
          email: 'user@example.com',
          token: 'mock-token',
        },
        { status: 200 }
      );
    }

    return HttpResponse.json<LoginResponseBody>(
      {
        id: 0,
        nome: '',
        email: '',
        token: '',
        message: 'Credenciais inválidas',
      },
      { status: 401 }
    );
  }),

  http.post<
    {},
    GoogleLoginRequestBody,
    GoogleLoginResponseBody,
    '/auth/google'
  >('/auth/google', async ({ request }) => {
    const { token } = await request.json();

    if (token === 'mock-google-token') {
      return HttpResponse.json(
        {
          id: 2,
          nome: 'Google User',
          email: 'googleuser@example.com',
          token: 'mock-google-token',
        },
        { status: 200 }
      );
    }

    return HttpResponse.json<GoogleLoginResponseBody>(
      { id: 0, nome: '', email: '', token: 'Token inválido' },
      { status: 401 }
    );
  }),

  // Mock do logout
  http.post<
    {}, // Use {} para PathParams
    undefined, // Nenhum corpo de requisição
    LogoutResponseBody,
    '/auth/logout'
  >('/auth/logout', () => {
    return HttpResponse.json(
      { message: 'Logout bem-sucedido' },
      { status: 200 }
    );
  }),
];
