const generateDate = () => {
  const today = new Date().toLocaleDateString('es-GT').split('T')[0]
  const todaysDate = today.split('/').reverse().join('/').replace(/[\/]/g, '-')

  return todaysDate
}

export default generateDate
