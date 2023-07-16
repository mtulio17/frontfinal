import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';


const Navbar = ({ dataEdit }) => {
  return (
    <div>
      {!dataEdit ? <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link active>Agregar Nuevo Cliente</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Editar Cliente</Nav.Link>
        </Nav.Item>
      </Nav> :
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link >Agregar Nuevo Cliente</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active>Editar Cliente</Nav.Link>
          </Nav.Item>
        </Nav>}


    </div>
  )
}

export default Navbar