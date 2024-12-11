import React from 'react';

const NotificationsDashboard: React.FC = () => {
  return (
    <div className="bg-red-100 p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-2">Avisos Importantes</h3>
      <ul className="list-disc list-inside text-gray-700">
        <li>Atualização do sistema - 15/10/2023</li>
        <li>Manutenção programada - 18/10/2023</li>
      </ul>
    </div>
  );
};

export default NotificationsDashboard;
