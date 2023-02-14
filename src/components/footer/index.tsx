import { Container } from "./style";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <div>
        <img id="logotipo" src={"Motors shop.png"} alt="" />
        <p>© 2022 - Todos os direitos reservados.</p>
        <button onClick={handleScrollToTop}>
          <img src="angle-up.png" alt="" />
        </button>
      </div>
    </Container>
  );
};

export default Footer;
