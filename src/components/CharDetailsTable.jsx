import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DenseTable({ characterData }) {
  const traits = characterData?.traits;
  const stamina = characterData?.stamina;
  const luck = characterData?.luck;
  const career = characterData?.career;
  const name = characterData?.name;
  const careerSkills = characterData?.careerSkills;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Character Details</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th">Name:</TableCell>
            <TableCell align="right">Bob</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th">Name:</TableCell>
            <TableCell align="right">Bob</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
