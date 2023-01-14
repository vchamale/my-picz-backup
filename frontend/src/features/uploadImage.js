// const onSave = async (photos) => {
//   if (photos.length === 0) console.log('Please upload your image!', 'error')

//   try {
//     setLoading(true)

//     const formData = new FormData()

//     formData.append('description', description)
//     formData.append('url', selectedImages[0])

//     const token = localStorage.getItem('token') || 'invalid token'

//     const config = {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         Authorization: `Bearer ${token}`
//       }
//     }

//     const { data } = await axiosClient.post(
//       '/images',
//       {
//         file: formData.getAll('url')[0],
//         description
//       },
//       config
//     )

//     console.log(data.msg, 'success')
//   } catch (error) {
//     console.log(error)
//   } finally {
//     setLoading(false)
//   }
// }
