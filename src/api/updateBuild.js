import axios from 'axios'

export default async ({
  buildID,
  name,
  description,
  weapons,
  actives,
  passives,
  queryString
}) => {
  try {
    const { data } = await axios({
      method: 'patch',
      baseURL: process.env.REACT_APP_DEV_API_URL,
      url: `/builds/${buildID}`,
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem('user')).token
        }`
      },
      data: {
        name,
        description,
        weapons,
        actives,
        passives,
        queryString
      }
    })

    return data
  } catch (error) {
    console.log(error)
    return false
  }
}
