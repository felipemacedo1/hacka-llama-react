import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registre os elementos necessários do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const tasksData = {
  labels: ['Nota Geral', 'Presença', 'Nível de Progresso', 'Metas Conquistadas'],
  datasets: [{
    label: 'Desempenho',
    data: [85, 95, 75, 60], // Dados de desempenho para cada categoria
    backgroundColor: [
      'rgba(63, 81, 181, 0.5)',   // Azul (Nota Geral)
      'rgba(76, 175, 80, 0.5)',   // Verde (Presença)
      'rgba(255, 193, 7, 0.5)',   // Amarelo (Nível de Progresso)
      'rgba(233, 30, 99, 0.5)'    // Rosa (Metas Conquistadas)
    ],
    borderColor: [
      'rgba(63, 81, 181, 1)',     // Azul
      'rgba(76, 175, 80, 1)',     // Verde
      'rgba(255, 193, 7, 1)',     // Amarelo
      'rgba(233, 30, 99, 1)'      // Rosa
    ],
    borderWidth: 1
  }]
};

const TasksDashboard: React.FC = () => {
  // Calculando o total de todas as tarefas
  const totalTasks = tasksData.datasets[0].data.reduce((sum, value) => sum + value, 0);

  return (
    <div className="flex bg-green-100 p-4 rounded-lg shadow min-w-[400px] max-h-[300px]">
      {/* Coluna para o título e gráfico */}
      <div className="flex flex-col items-center w-[50%]">
        <h3 className="text-lg font-bold mb-2">Desempenho Geral</h3>
        <Doughnut
          data={tasksData}
          width={100}
          height={100}
          options={{
            plugins: {
              legend: {
                display: false, // Desativa as legendas do gráfico
              },
              tooltip: {
                enabled: false, // Desativa a exibição do tooltip
              },
            },
            responsive: true,
            maintainAspectRatio: true,
          }}
        /> {/* Gráfico menor */}
      </div>

      {/* Coluna para o índice com as cores e as porcentagens */}
      <div className="flex flex-col justify-center items-start mx-4 text-sm text-gray-700 w-[50%]">
        {tasksData.labels.map((label, index) => {
          // Calculando a porcentagem para cada tarefa
          const percentage = ((tasksData.datasets[0].data[index] / totalTasks) * 100).toFixed(1);

          return (
            <div key={index} className="flex items-center mb-2 justify-between w-full">
              <div
                className="w-2 h-2 mr-2 rounded-full"
                style={{ backgroundColor: tasksData.datasets[0].backgroundColor[index] }} // Cor dinâmica
              ></div>
              <span>{label}</span>
              <span className="text-sm text-gray-500 ml-auto">({percentage}%)</span>  {/* Alinha à direita */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TasksDashboard;
