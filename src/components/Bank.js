import React, {Fragment, useEffect, useState} from 'react'
import { httpHelper } from '../helper/httpHelper'
import TableClient from './TableClient';
import FormClient from './FormClient';

const Bank = () => {
    const [base, setBase] = useState([])
    const [dataEdit, setDataEdit] = useState(null);
    let api = httpHelper();
    let url = "http://localhost:5000/users"

    useEffect(()=>{
        api.get(url).then(res => {
            if(!res.err){
                setBase(res)
            }else{
                setBase([])
            }
        }
         )
    },[])

    const createData = (data) => {
        data.id = Date.now();
        setBase([...base, data])
      }
      const updateData = (data) => {
        let newData = base.map((el) => el.id === data.id ? data:el)
        setBase (newData)
       }
      const deleteData = (id) => {
        let isDelete = window.confirm('esta seguro que desea eliminar el usurio?')
        if(isDelete){
          let newData = base.filter(el => el.id !== id)
          setBase(newData)
        }

    }
  return (
    <Fragment>
    <FormClient create={createData} dataToEdit={dataEdit} update={updateData} dataEdit={dataEdit} setDataEdit={setDataEdit} />
    <TableClient data={base} setDataEdit={setDataEdit} deleteData={deleteData} />
  </Fragment>
  )
}

export default Bank