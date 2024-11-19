import React from "react";
import ProgressDashboard from "../../components/dashboards/ProgressDashboard";
import TasksDashboard from "../../components/dashboards/TasksDashboard";
import GradesDashboard from "../../components/dashboards/GradesDashboard";
import EventsDashboard from "../../components/dashboards/EventsDashboard";
import NotificationsDashboard from "../../components/dashboards/NotificationsDashboard";
import StatisticsDashboard from "../../components/dashboards/StatisticsDashboard";
import { Play } from "@phosphor-icons/react";

const Dashboard: React.FC = () => {
  return (
    <div className="p-4">
      {/* section 01 */}
      <div className="flex justify-around">
        <div
          className="pr-4"
          style={{ marginTop: "-51px", marginLeft: "-20px" }}
        >
          <img
            className="w-80 h-80 rounded-full"
            src="https://s3-alpha-sig.figma.com/img/9be4/40b0/8ab76bd5949f9fe881736e40ccb78f92?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IUx85bKtoT~WQsfMoTT6Z-IDDTyXSXVX3uInupDgwRcmweQMmnZ7n4EmY-kPW52spPPZ9l8XpF8-7WwJMiQodkeK-zHhFhucGxzvFuCJ2zZ0hUIRviTQELOJ2BqJe2hHaBSsU4FBMl7StRwgjZVprCUM5OXM2EyTq0OouT7-LfJzutVD3C5FlzzrtCXyWestpL74eB~ecXIDg6Rj7FJuDz1Nicp7KHqlNwvYie4puy4kfvekJUvLqVrnq3YrHuSBrZ9Fp8-xSa4hAY-KibtLZehhCQcVswjkSgvTozMq~PPCl8nZPpLFJ0ZfbA2NOyoCjY7Apx2qnask3-RzyvQKhw__"
            alt=""
          />
        </div>
        {/* container 'in progress' section */}
        <div className="w-1/2 mt-6">
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
              style={{ width: "45%" }}
            ></div>
            <div className="flex justify-between items-center">
              {/* Parte da esquerda */}
              <div className="flex items-start">
                <h1 className="text-9xl font-mono font-bold text-yellow-400 mr-4">
                  9
                </h1>
                <div>
                  <h4 className="text-base font-medium">Aula atual:</h4>
                  <h3 className="text-2xl font-semibold">Matemática</h3>
                  <p className="text-sm text-gray-500">Planejamento - 38 min</p>
                </div>
              </div>

              {/* Meio */}
              <div className="flex items-center justify-center">
                <p className="text-gray-300 text-4xl font-semibold">9%</p>
              </div>

              {/* Parte da direita */}
              <div className="flex flex-col items-center">
                <button className="flex items-center justify-center bg-blue-600 text-white w-80 h-16 rounded-lg">
                  <Play className="w-6 h-6 mr-2" size={32} weight="fill" />
                  Continuar
                </button>
                <p className="text-sm text-gray-400 mt-2">
                  Ver minhas Formações e Planos de Estudo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProgressDashboard />
        <TasksDashboard />
        <div className="w-170 h-100">
          <GradesDashboard />
        </div>
        {/* <EventsDashboard />
        <NotificationsDashboard /> */}
        <div>
          <StatisticsDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
