import { styled } from "../../styles/stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  width: "312px",
  height: "360px",
});

export const Image = styled("div", {
  position: "relative",
  img: {
    backgroundColor: "$grey7",
    width: "312px",
    header: "152px",
  },
  span: {
    position: "absolute",
    top: "10px",
    left: "15px",
    backgroundColor: "$brand1",
    padding: "5px",
    color: "$white",
    fontFamily: "Inter",
  },
});

export const Infos = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  height: "100%",

  h2: {
    fontFamily: "Lexend",
    fontSize: "16px",
    color: "$grey1",
  },
  p: {
    fontSize: "14px",
    color: "$grey2",
    fontFamily: "Inter",
  },

  div: {
    display: "flex",
    alignItems: "center",
  },

  "#advertiser": {
    fontSize: "16px",
    color: "$grey2",
    fontWeight: 500,
    fontFamily: "Inter",
  },
});

export const Details = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  "#mileage": {
    fontSize: "14px",
    color: "$brand1",
    fontWeight: 500,
    fontFamily: "Inter",
    backgroundColor: "$brand4",
    padding: "5px",
    borderRadius: "4px",
    marginRight: "10px",
  },
  "#year": {
    fontSize: "14px",
    color: "$brand1",
    fontWeight: 500,
    fontFamily: "Inter",
    backgroundColor: "$brand4",
    padding: "5px",
    borderRadius: "4px",
  },
  "#price": {
    fontSize: "16px",
    color: "$grey1",
    fontWeight: 500,
    fontFamily: "Inter",
  },
});
