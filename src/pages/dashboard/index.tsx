import { useContext } from "react";
import { AuctionCards } from "../../components/AuctionCards";
import Card from "../../components/cards";
import Footer from "../../components/footer";

import { ModalCreateAnnouncement } from "../../components/ModalCreateAnnouncement";
import { Header } from "../../components/Header";
import { MenuSlide } from "../../components/MenuSlide";
import { Standard } from "../../components/Standard";
import { MenuContext } from "../../contexts/menuContext";
import listAnnouncements from "../../mocks/auto-vehicles";
import { Main, Showcase } from "./style";

const Dashboard = () => {
  const { isOpenMenu, isHamburguerMenu } = useContext(MenuContext);
  return (
    <>
      <Header />
      <Main>
        {isOpenMenu && <MenuSlide isHamburguerMenu={isHamburguerMenu} />}
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
      </Main>
      <Footer />
    </>
  );
};

export default Dashboard;
