import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { FaAngleLeft } from 'react-icons/fa'
import { API_URL_ID } from '../constants'

import '../styles/Cocktail.css'


const CocktailPage = () => {

  const [drink, setDrink] = useState([])
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const res = await fetch(API_URL_ID + id)
      const data = await res.json()
      const { drinks } = data

      if (drinks[0]) {
        const cocktails = drinks.map(drink => {
          const { idDrink, strDrink, strDrinkThumb, strCategory, strGlass, strAlcoholic, strInstructions } = drink

          const newDrink = {
              _id: idDrink,
              title: strDrink,
              image: strDrinkThumb,
              category: strCategory,
              glass: strGlass,
              alcoholic: strAlcoholic,
              instructions: strInstructions,
          }

          return newDrink
        })

        setDrink(cocktails)
        setLoading(false)
      } else {
        setDrink([])
        setLoading(false)
      }


    } catch (error) {
      console.log(error)
    }
  }

  
  if (!loading && drink) {

    const { _id, title, image, category, glass, alcoholic, instructions } = drink[0]
  
    return (
      <section className="cocktail">
        <div className="cocktail__img">
          <img src={ image } alt={ title } />
        </div>
  
        <div className="cocktail__content">
          <Link to='/' className="cocktail__back"><FaAngleLeft /></Link>
          <h1>{ title }</h1>
          <p className="cocktail__desc">{ instructions }</p>
          <p className="cocktail__options"><span>Category:</span>{ category }</p>
          <p className="cocktail__options"><span>Info:</span>{ alcoholic }</p>
          <p className="cocktail__options"><span>Glass:</span>{ glass }</p>
        </div>
      </section>
    )
  }

}

export default CocktailPage