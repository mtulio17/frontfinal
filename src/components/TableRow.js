import React from 'react';
import {BsCheckLg, BsFillXCircleFill, BsTrashFill} from 'react-icons/bs'

const TableRow = ({row, setDataEdit, deleteData}) => {
    let {name, cuit, address, phone, email, type, id} = row

    return (
        <tr>
            <td>{row.name}</td>
            <td disable>{row.cuit}</td>
            <td>{row.address}</td>
            <td>{row.phone}</td>
            <td>{row.email}</td>
            <td>{(row.cc) ? <BsCheckLg/> : <BsFillXCircleFill/> }</td>
            <td>{(row.cs) ? <BsCheckLg/> : <BsFillXCircleFill/> }</td>  
            <td>{(row.ca) ? <BsCheckLg/> : <BsFillXCircleFill/> }</td>
            <td>{(row.cu) ? <BsCheckLg/> : <BsFillXCircleFill/> }</td>
            <td>
            <button onClick={() => setDataEdit(row)}>Editar</button>
            <button onClick={() => deleteData(id)}><BsTrashFill/></button>
            </td>
        </tr>
    )
}

export default TableRow