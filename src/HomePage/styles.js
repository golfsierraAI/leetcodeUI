import { makeStyles } from "@material-ui/core";

const homePageStyles = makeStyles({
  root: {
    width: "90vw",
    height: "86vh",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    overflow: "auto",
    borderRadius: 0,
  },
  tableBody: {
    "&:nth-child(even) tr:nth-child(odd)": {
      backgroundColor: "#2C394B",
    },
    "&:nth-child(even) tr:nth-child(even)": {
      backgroundColor: "#334756",
    },
  },
  tableCell: {
    border: "none",
    padding: "9.5px",
    color: "whitesmoke",
    fontFamily: "Montserrat",
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
    backgroundColor: "#334756",
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
