import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Announcement } from "../../contexts/announcement";
import { AuctionCards } from "../AuctionCards";
import Card from "../cards";

import { ShowCaseStyled } from "./styles";

interface ShowCaseProps {
  listAnnouncements: Announcement[];
}

export const ShowCase = ({ listAnnouncements }: ShowCaseProps) => {
  const location = useLocation();

  const [carlist, setCarlist] = useState<Announcement[]>([]);
  const [bikelist, setBikelist] = useState<Announcement[]>([]);

  const filterAnnouncements = () => {
    const cars = listAnnouncements.filter((annoucement) => {
      if (annoucement.is_car) {
        return annoucement;
      }
    });
    const bikes = listAnnouncements.filter((annoucement) => {
      if (!annoucement.is_car) {
        return annoucement;
      }
    });
    setCarlist(cars);
    setBikelist(bikes);
  };

  useEffect(() => {
    filterAnnouncements();
  }, [listAnnouncements]);

  return (
    <>
      {!location.pathname.includes("/userProfile") && (
        <ShowCaseStyled>
          <div>
            <h2 id="auctions">Leilão</h2>
          </div>
          <div>
            {listAnnouncements.length > 0 &&
              listAnnouncements.map((announcement, index) => {
                return <AuctionCards key={index} announcement={announcement} />;
              })}
            {listAnnouncements.length == 0 && (
              <div>
                <p>Ainda não há nenhum anuncio nesta seção...</p>
              </div>
            )}
          </div>
        </ShowCaseStyled>
      )}
      <ShowCaseStyled>
        <div>
          <h2 id="cars">Carros</h2>
        </div>
        <div>
          {carlist.length > 0 ? (
            carlist.map((announcement, index) => {
              return <Card key={index} announcement={announcement} />;
            })
          ) : (
            <div>
              <p>Ainda não há nenhum anuncio nesta seção...</p>
            </div>
          )}
        </div>
      </ShowCaseStyled>
      <ShowCaseStyled>
        <div>
          <h2 id="motorbikes">Motos</h2>
        </div>
        <div>
          {bikelist.length > 0 ? (
            bikelist.map((announcement, index) => {
              return <Card key={index} announcement={announcement} />;
            })
          ) : (
            <div>
              <p>Ainda não há nenhum anuncio nesta seção...</p>
            </div>
          )}
        </div>
      </ShowCaseStyled>
    </>
  );
};
