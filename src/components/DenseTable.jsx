import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DenseTable({ characterData }) {
  const skills = characterData?.skills;

  const rows = skills
    ? Object.keys(skills).map((skillName) =>
        createData(skillName, skills[skillName])
      )
    : [];

  // Split rows into two parts
  const middleIndex = Math.ceil(rows.length / 2);
  const firstHalf = rows.slice(0, middleIndex);
  const secondHalf = rows.slice(middleIndex);

  // Helper function to create data rows
  function createData(skillName, value) {
    return { skillName, value };
  }

  const renderTable = (data) => (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Skill Name</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
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

  return (
    <div
      style={{ display: "flex", gap: "20px", justifyContent: "space-between" }}
    >
      {renderTable(firstHalf)}
      {renderTable(secondHalf)}
    </div>
  );
}
