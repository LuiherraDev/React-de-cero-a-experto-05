import { heroApi } from "../api/hero.ape"


export const getHeroesByPage = async () => {
  const { data } = await heroApi.get('/')

  return data

}