import axios from 'axios'

export default async ({ id }) => {
  console.log(id)

  try {
    const { data } = await axios({
      method: 'delete',
      baseURL: process.env.REACT_APP_DEV_API_URL,
      url: `/builds/${id}`,
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem('user')).token
        }`
      }
    })

    return data
  } catch (error) {
    console.log(error)
    return false
  }
}
