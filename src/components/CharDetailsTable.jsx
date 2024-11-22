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
  const community = characterData?.community;
  const careerSkills = characterData?.careerSkills;
  const background1Prompt = characterData?.background1Prompt;
  const background1Result = characterData?.background1Result;
  const background2Prompt = characterData?.background2Prompt;
  const background2Result = characterData?.background2Result;
  const inventory = characterData?.inventory;

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
            <TableCell align="right">{name}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th">Community:</TableCell>
            <TableCell align="right">{community}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th">Career:</TableCell>
            <TableCell align="right">{career}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th">Career Skills:</TableCell>
            <TableCell align="right">
              {careerSkills ? Object.keys(careerSkills).join(", ") : "N/A"}
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th">Stamina:</TableCell>
            <TableCell align="right">{stamina}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th">Luck:</TableCell>
            <TableCell align="right">{luck}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th">Traits:</TableCell>
            <TableCell align="right">{traits}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th">{`${background1Prompt}:`}</TableCell>
            <TableCell align="right">{background1Result}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th">{`${background2Prompt}:`}</TableCell>
            <TableCell align="right">{background2Result}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th">{` Inventory:`}</TableCell>
            <TableCell align="right">{inventory}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
