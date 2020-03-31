import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "city", label: "City Name", minWidth: 170 },
  { id: "country", label: "Country Name", minWidth: 170 },
  { id: "continent", label: "Continent", minWidth: 170 },
  { id: "currency", label: "Currency Used", minWidth: 170 },
  { id: "language", label: "Language Spoken", minWidth: 170 }
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "3% 0 0 0"
  },
  header: {
    margin: "5% 0 0 0",
    textAlign: "center"
  },
  tableWrapper: {
    maxHeight: 540,
    overflow: "auto"
  },
  tableHeader: {
    fontWeight: "bold"
  }
});

const About = ({ posts }) => {
  const mystyle = {
    color: "white",
    padding: "10px",
    fontFamily: "Arial"
  };
  const classes = useStyles();

  return (
    <div>
      <h3 className={classes.header} style={mystyle}>
        Travel Information Service
      </h3>
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    className={classes.tableHeader}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((article, key) => (
                <TableRow>
                  <TableCell> {article.cityName}</TableCell>
                  <TableCell>{article.countryName}</TableCell>
                  <TableCell>{article.continent}</TableCell>
                  <TableCell>{article.currencyUsed}</TableCell>
                  <TableCell>
                    {article.languages.map(language => `${language} `)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Paper>
    </div>
  );
};

export default About;
