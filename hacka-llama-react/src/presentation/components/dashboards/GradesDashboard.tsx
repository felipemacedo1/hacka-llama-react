import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar os elementos necessários para o gráfico de barras
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const gradesData = {
  labels: [
    'Matemática',
    'História',
    'Ciências',
    'Física',
    'Química',
    'Geografia',
  ],
  datasets: [
    {
      label: 'Média das Notas',
      data: [8.5, 7.0, 9.0, 6.8, 8.0, 7.5],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const GradesDashboard: React.FC = () => {
  return (
    <div className="bg-dark-60 p-6 rounded-xl shadow-lg max-w-4xl mx-auto mt-10">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Média das Notas
      </h3>
      <Bar
        data={gradesData}
        options={{
          responsive: true,
          plugins: {
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              titleColor: '#fff',
              bodyColor: '#fff',
              padding: 10,
            },
            legend: {
              position: 'top',
              labels: {
                color: '#333',
              },
            },
          },
          scales: {
            x: {
              beginAtZero: true,
              grid: {
                display: false,
              },
              ticks: {
                color: '#555',
                font: {
                  weight: 'bold',
                },
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#555',
                font: {
                  weight: 'bold',
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default GradesDashboard;
