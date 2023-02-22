import { useContext, useState } from 'react';
import { Avatar } from '../../components/Avatar';
import Footer from '../../components/footer';
import { Header } from '../../components/Header';
import { ModalCreateAnnouncement } from '../../components/ModalCreateAnnouncement';
import { ModalSuccess } from '../../components/ModalSuccess';
import { ShowCase } from '../../components/ShowCase';
import { AuthContext } from '../../contexts/auth';
import { B1400 as Description, H6600 } from '../../styles/typography';
import { Container, InfoAdvertiser, Standart } from './styles';

export const MyAds = () => {
  const { user } = useContext(AuthContext);

  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  return (
    <Container>
      <Header />
      <Standart>
        <InfoAdvertiser>
          <Avatar username="Rodrigo Nunes" variant="big" />
          <div>
            <H6600>Rodrigo Nunes</H6600>
            <span>Anunciante</span>
          </div>
          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s
          </Description>
          <ModalCreateAnnouncement setOpenModalSuccess={setOpenModalSuccess} />
        </InfoAdvertiser>
      </Standart>
      {user && <ShowCase listAnnouncements={user.announcements} />}

      <Footer />
      {openModalSuccess && (
        <ModalSuccess openModal={openModalSuccess} setOpenModal={setOpenModalSuccess} />
      )}
    </Container>
  );
};
