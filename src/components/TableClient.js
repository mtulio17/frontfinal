import React from 'react'
import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';


const TableClient = ({data, setDataEdit, deleteData}) => {
  // console.log(data);
  return (
    <Table className='container' striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Nombre y Apellido</th>
          <th>CUIT</th>
          <th>Dirección</th>
          <th>Telefono</th>
          <th>email</th>
          <th>CC</th>
          <th>CS</th>
          <th>CA</th>
          <th>CU</th>
          <th>Acciones</th>

        </tr>
      </thead>
      <tbody>
       {data.length === 0 ?  <tr><td>Sin Datos</td></tr> : data.map(elem => <TableRow key={elem.id} row={elem} setDataEdit={setDataEdit} deleteData={deleteData}/>)}
      </tbody>
    </Table>
  )
}

export default TableClient