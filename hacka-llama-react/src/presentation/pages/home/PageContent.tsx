import React from 'react';
import QuestionList from '../../components/questions/QuestionList'; // Importa a lista de questões

const PageContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <QuestionList /> {/* Renderiza a lista de questões */}
    </div>
  );
};

export default PageContent;
