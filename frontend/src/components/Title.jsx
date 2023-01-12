import React from 'react'

const Title = ({ lightText, darkText }) => {
  return (
    <h1 className='text-pink-600 font-black text-6xl capitalize  py-6 px-3 '>
      {lightText}
      <span className='text-slate-700'> {darkText}</span>
    </h1>
  )
}

export default Title
