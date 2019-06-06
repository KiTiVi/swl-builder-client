import axios from 'axios'

export default async () => {
  try {
    const { data } = await axios({
      method: 'get',
      baseURL: process.env.REACT_APP_DEV_API_URL,
      url: '/users/me',
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem('user')).token
        }`
      }
    })

    return { ...data }
  } catch (error) {
    console.log(error)
    return false
  }
}
