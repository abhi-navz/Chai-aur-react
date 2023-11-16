import { useState } from 'react'
import InputBox from './components/InputBox'



function App() {
  

  return (
    <>
      <h1 className='text-3xl text-center bg-blue-600 mx-auto px-auto py-3 my-5 rounded-full'>Currency Converter </h1>
      <InputBox label={'From'} className='border'/>
      <InputBox label={'To'}/>
    </>
  )
}

export default App
