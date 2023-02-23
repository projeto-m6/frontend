import { B2400, B2500, H6600 } from '../../styles/typography';
import { Avatar } from '../Avatar';
import { Container } from './styles';

export const Comments = () => {
  return (
    <Container>
      <div className="comments">
        <H6600>Comentários</H6600>
        <ul>
          <li>
            <div>
              <Avatar username="Rodrigo Nunes" />
              <B2500>Rodrigo Nunes</B2500>
              <span className="time">há 3 dias</span>
            </div>
            <B2400>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </B2400>
          </li>
          <li>
            <div>
              <Avatar username="Rodrigo Nunes" />
              <B2500>Rodrigo Nunes</B2500>
              <span className="time">há 3 dias</span>
            </div>
            <B2400>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </B2400>
          </li>
        </ul>
      </div>
    </Container>
  );
};
