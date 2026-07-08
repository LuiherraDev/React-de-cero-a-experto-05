import { heroApi } from "../api/hero.ape"


export const getHeroesByPageAction = async () => {
  const { data } = await heroApi.get('/')


  console.log({ data })

  return data

}