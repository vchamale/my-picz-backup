const Alert = ({ alert }) => {
  return (
    <div
      className={`${
        alert.error ? 'from-pink-400 to-pink-600' : 'from-cyan-400 to-cyan-600'
      } bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm my-10`}
    >
      {alert.msg}
    </div>
  )
}

export default Alert
