import React, { useState } from 'react';
import NavBar from '../../components/Navbar';
import DashboardCard from '../../components/DashboardCard';
import ProfilePopup from '../../components/ProfilePopup';
import EditProfilePopup from '../../components/EditProfilePopup';

const Dashboard = () => {
  const [profilePopupOpen, setProfilePopupOpen] = useState(false);
  const [editProfilePopupOpen, setEditProfilePopupOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <div className="p-4">
        <DashboardCard title="Progresso Geral">
          {/* Gráfico de progresso aqui */}
        </DashboardCard>
        <DashboardCard title="Tarefas Pendentes">
          {/* Lista de tarefas aqui */}
        </DashboardCard>
      </div>

      {profilePopupOpen && <ProfilePopup onClose={() => setProfilePopupOpen(false)} />}
      {editProfilePopupOpen && <EditProfilePopup onClose={() => setEditProfilePopupOpen(false)} />}
    </div>
  );
};

export default Dashboard;
