// src/components/EventsDashboard.tsx
import React from 'react';

const EventsDashboard: React.FC = () => {
  return (
    <div className="bg-yellow-100 p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-2">Próximos Eventos</h3>
      <div className="text-gray-700">
        <p>
          <strong>Reunião:</strong> 10/10/2023
        </p>
        <p>
          <strong>Projeto Final:</strong> 20/10/2023
        </p>
        <p>
          <strong>Exame:</strong> 25/10/2023
        </p>
      </div>
    </div>
  );
};

export default EventsDashboard;
