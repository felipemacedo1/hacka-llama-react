import { BrowserRouter } from 'react-router-dom';


import { RoutesConfig } from './application/routes/RoutesConfig';
import LoadingSpinner from './presentation/components/common/LoadingSpinner';
import { AuthProvider, useAuth } from './presentation/contexts/AuthContext';
import NavBar from './presentation/components/navbar/NavBar';
import Footer from './presentation/components/footer/Footer';


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
