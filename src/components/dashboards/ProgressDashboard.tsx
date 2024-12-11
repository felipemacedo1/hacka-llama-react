import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const progressData = {
  labels: ['Progresso'],
  datasets: [
    {
      label: 'Progresso Geral',
      data: [75],
      backgroundColor: ['rgba(54, 162, 235, 0.2)'],
      borderColor: ['rgba(54, 162, 235, 1)'],
      borderWidth: 1,
    },
  ],
};

const ProgressDashboard: React.FC = () => {
  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-2">Progresso Geral</h3>
      <Doughnut data={progressData} />
    </div>
  );
};

export default ProgressDashboard;
