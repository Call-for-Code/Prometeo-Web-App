import React from 'react';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import Sensors from './sensors';
import Team from './team';

function Dashboard() {
  return (
    <div>
      <Header />
      <SideMenu />
      <Sensors />
      <Team />
    </div>
  );
}

export default Dashboard;
