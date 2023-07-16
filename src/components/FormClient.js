import React, { useState, useEffect } from 'react';
import Style from './Style.css'
import Navbar from './Navbar';

const FormClient = ({ create, update, setDataEdit, dataEdit }) => {

  const [isChecked, setIsChecked] = useState();

  const initialForm = {
    id: null,
    name: "",
    cuit: "",
    address: "",
    phone: "",
    email: "",
    cc: false,
    cs: false,
    ca: false,
    cu: false
  }
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataEdit) {
      setForm(dataEdit)
    } else {
      setForm(initialForm)
    }
  }, [dataEdit])

  const handleChange = (e) => {

    console.log(e.target.checked);

    setIsChecked(e.target.checked)

    setForm({
      ...form, [e.target.name]: e.target.value,


    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);

    if (!form.name || !form.cuit || !form.email) {
      alert('Nombre, CUIT, Email son campos requeridos!')
      return
    }
    if (form.id === null) {
      create(form)
    } else {
      update(form)
    }
    handleReset()

  }
  const handleReset = (e) => {
    setForm(initialForm);
    setDataEdit(null)
  }


  return (
    <div className='formClient'>
      <h3 className='text-center'>TUL BANK</h3>
      <Navbar dataEdit={dataEdit}/>
      <form className='form container'>
      <label htmlFor="">*Nombre Y Apellido:</label>
        <input type="text" name="name" onChange={handleChange} value={form.name} placeholder='Nombre y Apellido' required></input>
        <label htmlFor="">*CUIT:</label>
        <input type="number" name="cuit" onChange={handleChange} value={form.cuit} placeholder='12345678912' required></input>
        <label htmlFor="">Direccion:</label>
        <input type="text" name="address" onChange={handleChange} value={form.address}></input>
        <label htmlFor="">Telefono:</label>
        <input type="number" name="phone" onChange={handleChange} value={form.phone}></input>
        <label htmlFor="">*Email:</label>
        <input type="text" name='email' onChange={handleChange} value={form.email} placeholder='nombre@ejemplo.com' required></input>
        <h5>Tipos de Cuentas</h5>
        <div id='imputDiv'>
        <p>Los tipos de cuentas se modifican <strong>una</strong> a la vez por cuestiones de seguridad</p>
          <input   type="checkbox" name='cc' onChange={handleChange} checked={form.cc} value={isChecked} />
          <label >Cuenta Corriente (cc)</label>
          <input  className="" type="checkbox" name='cs' onChange={handleChange} checked={form.cs} value={isChecked} />
          <label className="px-3">Cuenta Sueldo (cs)</label>
          <input  className="" type="checkbox" name='ca' onChange={handleChange} checked={form.ca} value={isChecked} />
          <label className="px-3">Caja de Ahorros (ca)</label>
          <input className="" type="checkbox" name='cu' onChange={handleChange} checked={form.cu} value={isChecked} />
          <label className="px-3">Cuenta Unica (cu)</label>
        <hr />
        </div>
        <div>
          <input type="submit" value="Enviar" onClick={handleSubmit}></input>
          <input type="reset" value="Limpiar" onClick={handleReset}></input>
        </div>

      </form>

    </div>

  )
}

export default FormClient