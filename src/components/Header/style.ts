import { styled } from "../../styles/stitches.config";

export const ContainerHeader = styled("div", {
  width: "100vw",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  background: "#FDFDFD",
  borderBottom: "2px solid #DEE2E6",
  backgroundColor: "#ffffff",
});

export const NavLinks = styled("div", {
  display: "flex",
  gap: "20px",
  height: "100%",
});

export const Links = styled("div", {
  display: "flex",
  gap: "44px",
  borderRight: "1px solid #DEE2E6",
  paddingRight: "44px",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",

  p: {
    cursor: "pointer",
  },

  "p:hover": {
    color: "$grey3",
  },
});

export const NavButtons = styled("div", {
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: "20px",
  height: "100%",
  display: "flex",
  gap: "20px",

  ".login": {
    background: "transparent",
    border: "none",
  },

  ".register": {
    background: "transparent",
    border: "2px solid #DEE2E6",
    padding: "15px",
    borderRadius: "1rem",
    boxShadow: "none",

    p: {
      color: "#0B0D0D",
    },
  },

  "button:hover p": {
    color: "$grey3",
    borderColor: "$grey3",
  },
});
