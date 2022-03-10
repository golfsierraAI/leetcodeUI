import { makeStyles } from "@material-ui/core";

const homePageStyles = makeStyles({
  heading: {
    color: "white",
    fontFamily: "Montserrat",
    textAlign: "center",
    letterSpacing: "4px",
    fontWeight: 100,
  },
  root: {
    width: "90vw",
    height: "87vh",
    position: "absolute",
    top: "55%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    overflow: "auto",
    borderRadius: 0,
    backgroundColor: "transparent",
    border: "2px solid #EEEEEE",
  },
  tableBody: {
    "&:nth-child(even) tr:nth-child(odd)": {
      backgroundColor: "#00000073",
    },
    "&:nth-child(even) tr:nth-child(even)": {
      backgroundColor: "#444444b0",
    },
  },
  tableCell: {
    border: "none",
    padding: "9.5px",
    color: "whitesmoke",
    fontFamily: "Montserrat",
    fontWeight: 300,
  },
  checkBox: {
    color: "white",
  },
  checkBoxChecked: {
    color: "white !important",
  },
  tableCellHeader: {
    fontSize: "1.2rem",
    fontWeight: 500,
    color: "whitesmoke",
    fontFamily: "Montserrat",
    backgroundColor: "black",
    border: "none",
  },
  link: {
    color: "whitesmoke",
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-100%)",
  },
});

export default homePageStyles;
