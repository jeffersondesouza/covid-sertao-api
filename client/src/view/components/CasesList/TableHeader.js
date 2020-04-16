import React from 'react';
import {
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

const TableHeader = () => (
  <TableHead>
    <TableRow>
      {/* <TableCell>SUS</TableCell> */}
      <TableCell>Paciente</TableCell>
      <TableCell align="center">Tipo</TableCell>
      <TableCell>Situação</TableCell>
      <TableCell>Contato</TableCell>
      <TableCell>Registrado em</TableCell>
      <TableCell>Atualização</TableCell>
      <TableCell align="center">Dias de acompanhamento</TableCell>
      <TableCell />
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
