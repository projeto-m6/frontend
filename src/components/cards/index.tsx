import { useEffect, useState } from 'react';
import { Announcement } from '../../contexts/announcement';
import { Avatar } from '../Avatar';
import { Container, Details, Image, Infos } from './style';

const Card = ({
  id,
  description,
  is_car,
  title,
  images,
  is_sale,
  user,
  year,
  price,
  mileage,
  is_published,
}: Announcement) => {
  const [isDashboard, setIsDashboard] = useState<boolean>(true);

  useEffect(() => {
    let url_atual = window.location.href;
    if (url_atual == 'http://localhost:5173/') {
      setIsDashboard(false);
    }
  }, []);

  return (
    <Container>
      <Image is_published={is_published}>
        <img src={images[0].image_url} alt="car" />
        {isDashboard && <span>{is_published ? 'Ativo' : 'Inativo'}</span>}
      </Image>
      <Infos>
        <h2>{title}</h2>
        <p>{description.length > 81 ? description.slice(0, 80) + '...' : description}</p>
        <div>
          <Avatar username={user.name} />
          <p id="advertiser">{user.name}</p>
        </div>
      </Infos>
      <Details>
        <div>
          <span id="mileage">{mileage} KM</span>
          <span id="year">{year}</span>
        </div>
        <span id="price">
          {Number(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
      </Details>
    </Container>
  );
};

export default Card;
