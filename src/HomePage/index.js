import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import react from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { tableDataLoadStart } from "./action";
import LinkIcon from "@mui/icons-material/Link";
import homePageStyles from "./styles";
import GitHubIcon from "@mui/icons-material/GitHub";
const HomePage = () => {
  const classes = homePageStyles();
  const dispatch = useDispatch();

  react.useEffect(() => {
    dispatch(tableDataLoadStart());
  }, []);

  const storeState = useSelector((state) => {
    return state.tableDataReducer;
  });
  const { data } = storeState.data;

  const capitalize = (str, lower = false) =>
    (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
      match.toUpperCase()
    );

  const clickManager = (id) => {
    localStorage.setItem(id, !JSON.parse(localStorage.getItem(id)));
  };
  return data ? (
    <>
      <Typography className={classes.heading} variant="h2">
        LEETCODE PATTERNS
      </Typography>
      <Paper className={classes.root}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell classes={{ root: classes.tableCellHeader }}>
                <a
                  href="https://github.com/golfsierraAI"
                  className={classes.link}
                  target="_blank"
                >
                  <GitHubIcon
                    fontSize="large"
                    style={{ padding: "0 0 0 5px" }}
                  />
                </a>
              </TableCell>
              {Object.keys(data[0])
                .slice(1)
                .map((key) => {
                  return (
                    <TableCell classes={{ root: classes.tableCellHeader }}>
                      {capitalize(key.slice(0, key.indexOf("n") + 1)) +
                        " " +
                        capitalize(key.slice(key.indexOf("n") + 1, key.length))}
                    </TableCell>
                  );
                })}
            </TableRow>
          </TableHead>
          <TableBody
            classes={{
              root: classes.tableBody,
            }}
          >
            {data.map((key) => {
              return (
                <TableRow key={key.id}>
                  <TableCell classes={{ root: classes.tableCell }}>
                    <Checkbox
                      classes={{
                        checked: classes.checkBoxChecked,
                        root: classes.checkBox,
                      }}
                      defaultChecked={JSON.parse(localStorage.getItem(key.id))}
                      onClick={() => clickManager(key.id)}
                    />
                  </TableCell>
                  {Object.values(key)
                    .slice(1)
                    .map((value) => {
                      return (
                        <TableCell classes={{ root: classes.tableCell }}>
                          {value.includes("https") ? (
                            <a
                              target="_blank"
                              href={value}
                              className={classes.link}
                            >
                              <LinkIcon />
                            </a>
                          ) : (
                            capitalize(value)
                          )}
                        </TableCell>
                      );
                    })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </>
  ) : (
    <ReactLoading
      className={classes.loader}
      type="bubbles"
      color={"white"}
      height={"7%"}
      width={"7%"}
    />
  );
};
export default HomePage;
