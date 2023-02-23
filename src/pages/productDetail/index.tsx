import { Avatar } from '../../components/Avatar';
import { Comments } from '../../components/Comments';
import Footer from '../../components/footer';
import { Header } from '../../components/Header';
import { B1400, H6600, H7500 } from '../../styles/typography';
import {
  AdvertiserInfo,
  Aside,
  Container,
  Gallery,
  Main,
  VehicleDescription,
  VehicleInfo,
} from './styles';

export const ProductDetail = () => {
  return (
    <>
      <Header />
      <Container>
        <Main>
          <div>
            <div className="corverImg">
              <img src="EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png" alt="" />
            </div>
            <VehicleInfo>
              <H6600>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </H6600>
              <div>
                <div className="spanGroup">
                  <span>2012</span>
                  <span>0 KM</span>
                </div>
                <H7500>R$ 00.000,00</H7500>
              </div>

              <button>comprar</button>
            </VehicleInfo>
            <VehicleDescription>
              <H6600>Descrição</H6600>
              <B1400>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </B1400>
            </VehicleDescription>
            <Comments />
          </div>
          <Aside>
            <Gallery>
              <H6600>Fotos</H6600>
              <ul>
                <li>
                  <img
                    src="EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png"
                    alt=""
                  />
                </li>
              </ul>
            </Gallery>
            <AdvertiserInfo>
              <Avatar username="Rodigo Nunes" variant="big" />
              <H6600>Rodrigo Nunes</H6600>
              <B1400>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's
              </B1400>
              <button>Ver todos anuncios</button>
            </AdvertiserInfo>
          </Aside>
        </Main>
        <Comments />
      </Container>
      <Footer />
    </>
  );
};
