import { AuctionCards } from '../../components/AuctionCards';
import Card from '../../components/cards';
import Footer from '../../components/footer';

import { Header } from '../../components/Header';
import { Standard } from '../../components/Standard';
import listAnnouncements from '../../mocks/auto-vehicles';
import { Showcase } from './style';

const Dashboard = () => {
  return (
    <>
      <Header />
      <Standard />
      <Showcase>
        <div>
          <h2>Leilão</h2>
        </div>
        <div>
          {listAnnouncements.map((announcement, index) => {
            return <AuctionCards key={index} announcement={announcement} />;
          })}
        </div>
      </Showcase>
      <Showcase>
        <div>
          <h2>Carros</h2>
        </div>
        <div>
          {listAnnouncements.map((announcement, index) => {
            if (announcement.is_car) {
              return <Card key={index} announcement={announcement} />;
            }
          })}
        </div>
      </Showcase>
      <Showcase>
        <div>
          <h2>Motos</h2>
        </div>
        <div>
          {listAnnouncements.map((announcement, index) => {
            if (!announcement.is_car) {
              return <Card key={index} announcement={announcement} />;
            }
          })}
        </div>
      </Showcase>
      <Footer />
    </>
  );
};

export default Dashboard;
