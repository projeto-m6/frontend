import { useEffect, useState } from "react";
import { IAnnouncement } from "../../mocks/auto-vehicles";
import { Container, Details, Image, Infos } from "./style";

const Card = (props: { announcement: IAnnouncement; index: number }) => {
  const [isDashboard, setIsDashboard] = useState<boolean>(true);

  useEffect(() => {
    let url_atual = window.location.href;
    if (url_atual == "http://localhost:5173/") {
      setIsDashboard(false);
    }
  }, []);
  return (
    <Container>
      <Image>
        <img src={props.announcement.image[0]} alt="car" />
        {isDashboard && (
          <span>{props.announcement.is_sale ? "Ativo" : "Inativo"}</span>
        )}
      </Image>
      <Infos>
        <h2>{props.announcement.title}</h2>
        <p>{props.announcement.description}</p>
        <div>
          <span id="material-ui">
            {props.announcement.user.name.split(" ").length > 0
              ? props.announcement.user.name.split(" ")[0][0] +
                props.announcement.user.name.split(" ")[1][0]
              : props.announcement.user.name.split(" ")[0][0]}
          </span>
          <p id="advertiser">{props.announcement.user.name}</p>
        </div>
      </Infos>
      <Details>
        <div>
          <span id="mileage">{props.announcement.mileage}</span>
          <span id="year">{props.announcement.year}</span>
        </div>
        <span id="price">{props.announcement.price}</span>
      </Details>
    </Container>
  );
};

export default Card;
