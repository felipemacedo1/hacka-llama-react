import React from 'react';
import ProgressDashboard from '../../components/dashboards/ProgressDashboard';
import TasksDashboard from '../../components/dashboards/TasksDashboard';
import GradesDashboard from '../../components/dashboards/GradesDashboard';
import EventsDashboard from '../../components/dashboards/EventsDashboard';
import NotificationsDashboard from '../../components/dashboards/NotificationsDashboard';
import StatisticsDashboard from '../../components/dashboards/StatisticsDashboard';

const Dashboard: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProgressDashboard />
        <TasksDashboard />
        <div className='w-170 h-100'>
        <GradesDashboard />
        </div>
        {/* <EventsDashboard />
        <NotificationsDashboard /> */}
        <div className=''>
        <StatisticsDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
