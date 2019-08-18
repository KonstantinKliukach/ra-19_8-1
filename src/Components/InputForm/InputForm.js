import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import './InputForm.css'

const  InputForm = () =>{
  const item = {}
  const handleChange = event => { const {name, value} = event.target; }
  const handleSubmit = event => { event.preventDefault(); }

  return (
    <form className='input-form' onSubmit={handleSubmit}>
      <div className="form-row align-items-center">
        <div className="col-md-3">
          <label htmlFor="inputDate">Название услуги</label>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputDistance">Стоимость услуги</label>
        </div>
      </div>
      <div className="form-row align-items-center">
        <div className="col-md-3">
          <input className="form-control" id="inputDate" placeholder="Введите название услуги" name="name" value={item.name} onChange={handleChange}/>
        </div>
        <div className="col-md-4">
          <input className="form-control" id="inputDistance" placeholder="Введите стоимость услуги" name="cost" value={item.value} onChange={handleChange}/>
        </div>
        <div className="col-md-3 d-flex justify-content-around ">
          <button type="submit" className="btn btn-outline-secondary">Ок</button>
          <button className="btn btn-outline-secondary">Отмена</button>
        </div>
      </div>
    </form>
  )
}

export default InputForm
