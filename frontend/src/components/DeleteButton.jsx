const DeleteButton = ({ title, onClickAction }) => {
  return (
    <button
      type='button'
      onClick={onClickAction}
      className='w-full text-white text-sm bg-rose-500 p-3 rounded-md uppercase font-bold hover:bg-rose-700 my-2'
    >
      {' '}
      {`Eliminar ${title}`}{' '}
    </button>
  )
}

export default DeleteButton
