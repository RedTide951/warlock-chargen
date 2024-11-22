import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(skillName, value) {
  return { skillName, value };
}

const rows = [
  createData("Athletics", 15),
  createData("Acrobatics", 14),
  createData("Sleight of Hand", 13),
  createData("Stealth", 12),
  createData("Arcana", 11),
  createData("History", 10),
  createData("Investigation", 9),
  createData("Nature", 8),
  createData("Religion", 7),
  createData("Animal Handling", 6),
  createData("Insight", 5),
  createData("Medicine", 4),
  createData("Perception", 3),
  createData("Survival", 2),
  createData("Deception", 1),
  createData("Intimidation", 0),
  createData("Performance", -1),
  createData("Persuasion", -2),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Skill Name</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.skillName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.skillName}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
