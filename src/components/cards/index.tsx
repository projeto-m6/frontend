import { useEffect, useState } from "react";
import { IAnnouncement } from "../../mocks/auto-vehicles";
import { Avatar } from "../Avatar";
import { Container, Details, Image, Infos } from "./style";

interface ICard {
  announcement: IAnnouncement;
}

const Card = ({ announcement }: ICard) => {
  const [isDashboard, setIsDashboard] = useState<boolean>(true);
  const {
    description,
    image,
    is_sale,
    mileage,
    price,
    title,
    user,
    year,
  }: IAnnouncement = announcement;

  useEffect(() => {
    let url_atual = window.location.href;
    if (url_atual == "http://localhost:5173/") {
      setIsDashboard(false);
    }
  }, []);

  return (
    <Container>
      <Image>
        <img src={image[0]} alt="car" />
        {isDashboard && <span>{is_sale ? "Ativo" : "Inativo"}</span>}
      </Image>
      <Infos>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <Avatar username={user.name} />
          <p id="advertiser">{user.name}</p>
        </div>
      </Infos>
      <Details>
        <div>
          <span id="mileage">{mileage}</span>
          <span id="year">{year}</span>
        </div>
        <span id="price">{price}</span>
      </Details>
    </Container>
  );
};

export default Card;
