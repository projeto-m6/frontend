import { useContext } from 'react';
import Footer from '../../components/footer';

import { Header } from '../../components/Header';
import { ShowCase } from '../../components/ShowCase';
import { Standard } from '../../components/Standard';
import { WriteComment } from '../../components/WriteComment';
import { AnnouncementContext } from '../../contexts/announcement';
import listAnnouncements from '../../mocks/auto-vehicles';

const Dashboard = () => {
  const { announcements } = useContext(AnnouncementContext);

  return (
    <>
      <Header />
      <Standard />
      <ShowCase listAnnouncements={announcements} />
      <Footer />
    </>
  );
};

export default Dashboard;
