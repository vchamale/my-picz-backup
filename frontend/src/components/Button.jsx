import React from 'react'

const Button = ({ title, onClickAction }) => {
  return (
    <button
      type='button'
      onClick={onClickAction}
      className='text-white text-sm bg-rose-600 p-3 rounded-md uppercase font-bold hover:bg-rose-700 my-2'
    >
      {' '}
      {title}{' '}
    </button>
  )
}

export default Button
