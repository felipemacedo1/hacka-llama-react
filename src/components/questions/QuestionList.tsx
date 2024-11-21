import React from 'react';
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

  return (
    <div className="space-y-4">
      {questions.map((q, index) => (
        <Question key={index} {...q} />
      ))}
    </div>
  );
};

export default QuestionList;
