const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="spinner">
      {/* Aqui pode ser um spinner de CSS ou um componente de biblioteca */}
      Carregando...
    </div>
  </div>
);

export default LoadingSpinner;
