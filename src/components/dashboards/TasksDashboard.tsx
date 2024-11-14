import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registre os elementos necessários do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);


const tasksData = {
  labels: ['Estudar React', 'Exercícios de Matemática', 'Ler História'],
  datasets: [{
    label: 'Tarefas Pendentes',
    data: [1, 1, 1],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)'
    ],
    borderWidth: 1
  }]
};

const TasksDashboard: React.FC = () => {
  return (
    <div className="bg-green-100 p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-2">Tarefas Pendentes</h3>
      <Doughnut data={tasksData} />
    </div>
  );
};

export default TasksDashboard;
