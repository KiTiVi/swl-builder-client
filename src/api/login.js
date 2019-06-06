import axios from 'axios'

export default async ({ username, password }) => {
  try {
    const { data } = await axios({
      method: 'post',
      baseURL: process.env.REACT_APP_DEV_API_URL,
      url: '/users/login',
      data: {
        username,
        password
      }
    })

    return { ...data.user, token: data.token }
  } catch (error) {
    console.log(error)
    return false
  }
}
