import React, { useState, useEffect } from "react";
import Axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    textAlign: "center",
  },
});

export default function List() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await Axios.get("http://localhost:8000/api/users");
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Text</TableCell>
            <TableCell align="center">Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((detail, id) => (
            <TableRow key={id}>
              <TableCell align="center">{detail.name}</TableCell>
              <TableCell align="center">{detail.email}</TableCell>
              <TableCell align="center">{detail.text}</TableCell>
              <TableCell align="center">{detail.createAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
