import axios from 'axios'

export default async ({ name, description, actives, passives }) => {
  try {
    const { data } = await axios({
      method: 'post',
      baseURL: process.env.REACT_APP_DEV_API_URL,
      url: '/builds',
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem('user')).token
        }`
      },
      data: {
        name,
        description,
        actives,
        passives
      }
    })

    return { ...data.build }
  } catch (error) {
    console.log(error)
    return false
  }
}
