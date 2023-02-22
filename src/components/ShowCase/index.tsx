import { Announcement } from '../../contexts/announcement';
import { AuctionCards } from '../AuctionCards';
import Card from '../cards';

import { ShowCaseStyled } from './styles';

interface ShowCaseProps {
  listAnnouncements: Announcement[];
}

export const ShowCase = ({ listAnnouncements }: ShowCaseProps) => {
  return (
    <>
      <ShowCaseStyled>
        <div>
          <h2>Leilão</h2>
        </div>
        <div>
          {listAnnouncements.length > 0 &&
            listAnnouncements.map((announcement, index) => {
              return <AuctionCards key={index} announcement={announcement} />;
            })}
        </div>
      </ShowCaseStyled>
      <ShowCaseStyled>
        <div>
          <h2>Carros</h2>
        </div>
        <div>
          {listAnnouncements.length > 0 &&
            listAnnouncements.map((announcement, index) => {
              if (announcement.is_car) {
                return <Card key={index} {...announcement} />;
              }
            })}
        </div>
      </ShowCaseStyled>
      <ShowCaseStyled>
        <div>
          <h2>Motos</h2>
        </div>
        <div>
          {listAnnouncements.length > 0 &&
            listAnnouncements.map((announcement, index) => {
              if (!announcement.is_car) {
                return <Card key={index} {...announcement} />;
              }
            })}
        </div>
      </ShowCaseStyled>
    </>
  );
};
