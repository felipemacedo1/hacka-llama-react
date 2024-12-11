import React from 'react';
import { Play } from '@phosphor-icons/react';
import StatisticsDashboard from '../../components/dashboards/StatisticsDashboard';
import LineChartDashboard from '../../components/dashboards/LineChartDashboard';
import BarChartDashboard from '../../components/dashboards/BarChartDashboard';
import PieChartDashboard from '../../components/dashboards/PieChartDashboard';
import { useAuth } from '../../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { usuario } = useAuth();
  const statistics = [
    {
      title: 'Nível de progresso',
      value: 8536,
      percentual: 2,
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Presenças',
      value: 156,
      percentual: -1,
      bgColor: 'bg-yellow-100',
    },
    {
      title: 'Saúde e Bem-Estar',
      value: '82%',
      percentual: 3,
      bgColor: 'bg-green-100',
    },
    {
      title: 'Metas Concluídas',
      value: 134,
      percentual: 5,
      bgColor: 'bg-pink-100',
    },
  ];

  const lineChartData = [
    { month: 'Jan', thisYear: 3, lastYear: 2 },
    { month: 'Feb', thisYear: 4, lastYear: 3 },
    { month: 'Mar', thisYear: 6, lastYear: 5 },
    { month: 'Apr', thisYear: 8, lastYear: 7 },
    { month: 'May', thisYear: 5, lastYear: 4 },
    { month: 'Jun', thisYear: 7, lastYear: 6 },
  ];

  const barChartData = [
    { subject: 'LPT', score: 7 },
    { subject: 'MAT', score: 8 },
    { subject: 'HST', score: 6 },
    { subject: 'GEO', score: 9 },
    { subject: 'BIO', score: 7 },
    { subject: 'ART', score: 8 },
  ];

  const pieChartData = [
    { name: 'Nota Geral', value: 70 },
    { name: 'Presença', value: 20 },
    { name: 'Nível de Progresso', value: 8 },
    { name: 'Metas Concluídas', value: 2 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="p-4 px-8">
      {/* Header com imagem e progresso */}
      <div className="flex flex-col md:flex-row items-start justify-around mb-8">
        {/* Imagem de destaque */}
        <div
          className="flex items-center"
          style={{ marginLeft: '-65px', paddingTop: '15px' }}
        >
          <img
            className="w-40 h-40 rounded-full"
            src="https://s3-alpha-sig.figma.com/img/9be4/40b0/8ab76bd5949f9fe881736e40ccb78f92?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IUx85bKtoT~WQsfMoTT6Z-IDDTyXSXVX3uInupDgwRcmweQMmnZ7n4EmY-kPW52spPPZ9l8XpF8-7WwJMiQodkeK-zHhFhucGxzvFuCJ2zZ0hUIRviTQELOJ2BqJe2hHaBSsU4FBMl7StRwgjZVprCUM5OXM2EyTq0OouT7-LfJzutVD3C5FlzzrtCXyWestpL74eB~ecXIDg6Rj7FJuDz1Nicp7KHqlNwvYie4puy4kfvekJUvLqVrnq3YrHuSBrZ9Fp8-xSa4hAY-KibtLZehhCQcVswjkSgvTozMq~PPCl8nZPpLFJ0ZfbA2NOyoCjY7Apx2qnask3-RzyvQKhw__"
            alt="Profile"
          />
        </div>

        {/* Container de Progresso */}
        <div className="w-full md:w-3/5 mt-6 bg-white shadow-md rounded-lg p-6">
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: '45%' }}
            ></div>
          </div>
          <div className="flex justify-between items-center">
            {/* Parte da esquerda */}
            <div className="flex items-start">
              <h1 className="text-6xl font-mono font-bold text-yellow-400 mr-4">
                9
              </h1>
              <div>
                <h4 className="text-base font-medium text-gray-600">
                  Aula atual:
                </h4>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Matemática
                </h3>
                <p className="text-sm text-gray-500">Planejamento - 38 min</p>
              </div>
            </div>

            {/* Parte do meio */}
            <div className="flex items-center justify-center">
              <p className="text-gray-600 text-4xl font-semibold">9%</p>
            </div>

            {/* Parte da direita */}
            <div className="flex flex-col items-center">
              <button className="flex items-center justify-center bg-blue-600 text-white w-64 h-12 rounded-lg shadow hover:bg-blue-700">
                <Play className="w-6 h-6 mr-2" size={32} weight="fill" />
                Continuar
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Ver minhas Formações e Planos de Estudo
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section com dashboards e gráficos */}
      <section className="flex flex-col md:flex-row">
        {/* Coluna lateral esquerda com as caixas */}
        <div className="flex flex-col md:w-1/4 space-y-4 mb-8">
          {statistics.map((stat, index) => (
            <StatisticsDashboard
              key={index}
              title={stat.title}
              value={stat.value}
              percentual={stat.percentual}
              bgColor={stat.bgColor}
            />
          ))}
        </div>

        {/* Gráficos ao lado */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:ml-6">
          <LineChartDashboard data={lineChartData} title="Médias" />
          <BarChartDashboard data={barChartData} title="Histórico de Notas" />
          <PieChartDashboard
            data={pieChartData}
            colors={COLORS}
            title="Desempenho Geral"
          />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
