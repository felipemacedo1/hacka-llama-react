import React, { useState } from 'react';
import Question from './Question';

const QuestionList = () => {
  const questions = [
    {
      question: 'Ciência e Tecnologia',
      testQuestion: 'INEP',
      description:
        'Sobre a utilização de recursos de informática em diagnósticos e pesquisas, marque a alternativa CORRETA.',
      options: [
        'Plataformas como R e Python fornecem acesso a vastas quantidades de dados genéticos e proteicos para pesquisa e desenvolvimento de novas terapias.',
        'Equipamentos como o PCR e o FACS são prementes na análise de propriedades físicas e químicas de células ou partículas, sendo amplamente utilizados em imunologia e hematologia para classificar células e medir sua resposta a tratamentos.',
        'Human Histo e Ion Torrent utilizam software para análise de dados biológicos, como o alinhamento de sequências, análise filogenética e análise de expressão gênica.',
        'PCR em Tempo Real (qPCR) é um software avançado para melhor visualização, análise e interpretação de imagens.',
        'Softwares como SPAdes e ABYSS são usados para quantificar a expressão gênica e detectar patógenos.',
      ],
      correctIndex: 0,
      questionIndex: 0,
      isCorrect: true,
    },
    {
      question: 'Ciência e Tecnologia',
      testQuestion: 'INEP',
      description:
        'Sobre a utilização de recursos de informática em diagnósticos e pesquisas, marque a alternativa CORRETA.',
      options: [
        'Plataformas como R e Python fornecem acesso a vastas quantidades de dados genéticos e proteicos para pesquisa e desenvolvimento de novas terapias.',
        'Equipamentos como o PCR e o FACS são prementes na análise de propriedades físicas e químicas de células ou partículas, sendo amplamente utilizados em imunologia e hematologia para classificar células e medir sua resposta a tratamentos.',
        'Human Histo e Ion Torrent utilizam software para análise de dados biológicos, como o alinhamento de sequências, análise filogenética e análise de expressão gênica.',
        'PCR em Tempo Real (qPCR) é um software avançado para melhor visualização, análise e interpretação de imagens.',
        'Softwares como SPAdes e ABYSS são usados para quantificar a expressão gênica e detectar patógenos.',
      ],
      correctIndex: 2,
      questionIndex: 1,
      isCorrect: false,
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="space-y-4">
      {/* Botões de Navegação */}
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-gray-200 px-4 py-2 rounded shadow hover:bg-gray-300 transition disabled:opacity-50"
          onClick={goToPreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Anterior
        </button>
        <span className="font-bold">
          Questão {currentQuestionIndex + 1} de {questions.length}
        </span>
        <button
          className="bg-gray-200 px-4 py-2 rounded shadow hover:bg-gray-300 transition disabled:opacity-50"
          onClick={goToNextQuestion}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          Próxima
        </button>
      </div>

      {/* Renderiza a pergunta atual */}
      <Question {...questions[currentQuestionIndex]} />
    </div>
  );
};

export default QuestionList;
