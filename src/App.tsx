import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Footer from './components/footer/Footer';
import { RoutesConfig } from './application/routes/RoutesConfig';
import NavBar from './components/navbar/NavBar';
import LoadingSpinner from './components/spinner/LoadingSpinner';

function AppContent() {
  const { usuario, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <BrowserRouter>
      {usuario && <NavBar />}
      <div className="min-h-[80vh] bg-dark-60">
        <RoutesConfig />
      </div>
      {!usuario && <Footer />}
    </BrowserRouter>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
