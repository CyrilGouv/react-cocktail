import { useEffect, useState } from "react"
import { API_URL } from "../constants"
import CocktailItem from './CocktailItem'

import '../styles/CocktailList.css'


const CocktailList = () => {

    const [search, setSearch] = useState('')
    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        callAPI()
    }, [])

    const callAPI = async () => {
        
        try {
            const res = await fetch(API_URL + search)
            const data = await res.json()
            const { drinks } = data

            if (drinks) {
                const cocktails = drinks.map(drink => {
                    const { idDrink, strDrink, strDrinkThumb, strCategory } = drink
        
                    const newDrink = {
                        id: idDrink,
                        title: strDrink,
                        image: strDrinkThumb,
                        category: strCategory,
                    }
        
                    return newDrink
                })
        
                setDrinks(cocktails)
            } else {
                setDrinks([])
            }
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <div className="cocktailList">
        { drinks.length === 0 && <p className="cocktailList__nomatch">Sorry, No Cocktails Matched :(</p> }
    
        <div className="cocktailList__wrapper">
            { drinks.map((drink, idx) => {
                return <CocktailItem key={ idx } { ...drink } />
            }) }
        </div>
    </div>
  )
}

export default CocktailList