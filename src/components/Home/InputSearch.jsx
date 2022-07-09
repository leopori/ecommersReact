import React from 'react'
import { useForm } from 'react-hook-form'
import './style/homeScreen.css'

const InputSearch = () => {

  const { handleSubmit, register, reset } = useForm()

  const submit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='form-home'>
      <input type="text" {...register('searchText')} />
      <button className='SearchButon'>Search</button>
    </form>
  )
}

export default InputSearch