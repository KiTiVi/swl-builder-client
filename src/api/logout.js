import axios from 'axios'

export default async () => {
  try {
    return await axios({
      method: 'post',
      baseURL: process.env.REACT_APP_DEV_API_URL,
      url: '/users/logoutAll',
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem('user')).token
        }`
      }
    })
  } catch (error) {
    console.log(error)
    return false
  }
}
