import { TrendUp, TrendDown } from '@phosphor-icons/react';
import React from 'react';

const StatisticsDashboard: React.FC = () => {
  const percentual = 2;

  return (
    <div className="flex flex-col bg-purple-100 p-4 rounded-lg shadow w-[200px] h-[112px]">
      <h3 className="text-lg font-bold text-gray-800 mb-2">Nível de progresso</h3>
      <div className="px-2 flex justify-between items-center text-sm text-gray-700">
        <span className="text-[24px] font-bold">8.536</span>
        <span className={`flex items-center text-[16px] ${percentual > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {percentual > 0 ? `+${percentual}%` : `${percentual}%`}
          {percentual > 0 ? (
            <TrendUp size={16} className="ml-2" />
          ) : (
            <TrendDown size={16} className="ml-2" />
          )}
        </span>
      </div>
    </div>
  );
};

export default StatisticsDashboard;
