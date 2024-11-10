import React from 'react';

const DashboardCard = ({ title, children }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      {children}
    </div>
  );
};

export default DashboardCard;
