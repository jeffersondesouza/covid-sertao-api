import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel,
} from '@material-ui/core';

const TableHeader = () => (
  <TableHead>
    <TableRow>
      {/* <TableCell>SUS</TableCell> */}
      <TableCell>Paciente</TableCell>
      <TableCell>Tipo</TableCell>
      <TableCell>Situação</TableCell>
      <TableCell>Contato</TableCell>
      <TableCell>Registrado em</TableCell>
      <TableCell>Atualização</TableCell>
    </TableRow>
  </TableHead>
);

export default TableHeader;

/* <TableCell sortDirection="desc">
        <Tooltip enterDelay={300} title="Ordenar por Status">
          <TableSortLabel active direction="desc">
            Tipo
          </TableSortLabel>
        </Tooltip>
      </TableCell>
       */
