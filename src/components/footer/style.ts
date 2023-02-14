import { styled } from "../../styles/stitches.config";

export const Container = styled("footer", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "140px",
  width: "100%",
  backgroundColor: "$grey0",

  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },

  "#logotipo": {
    width: "153px",
    height: "23px",
  },

  p: {
    color: "$white",
    fontSize: "14px",
  },

  button: {
    width: "50px",
    height: "50px",
    backgroundColor: "$grey1",
    border: "none",
    borderRadius: "4px",
  },
});
