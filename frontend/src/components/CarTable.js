import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function CarTable({cars}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Manufacturer</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Package</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Mileage (mi)</TableCell>
            <TableCell align="right">Price (cents)</TableCell>
            <TableCell align="right">Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cars && cars.length && cars.map((car) => (
            <TableRow key={car.name}>
              <TableCell component="th">{car.manufacturer}</TableCell>
              <TableCell align="right">{car.model}</TableCell>
              <TableCell align="right">{car.package}</TableCell>
              <TableCell align="right">{car.color}</TableCell>
              <TableCell align="right">{car.year}</TableCell>
              <TableCell align="right">{car.category}</TableCell>
              <TableCell align="right">{car.mileage}</TableCell>
              <TableCell align="right">{car.price}</TableCell>
              <TableCell align="right">{car.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
