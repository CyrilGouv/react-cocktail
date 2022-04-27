import { Link } from 'react-router-dom'

import '../styles/CocktailItem.css'


const CocktailItem = (drink) => {

  const { id, title, image, category } = drink

  return (
    <article className="cocktailItem">
      <Link to={`/cocktail/${id}`} className="cocktailItem__link">
        <div className="cocktailItem__img">
          <img src={ image } alt={ title } />
        </div>

        <div className="cocktailItem__title">
          <h2>{ title }</h2>
          <span>{ category }</span>
        </div>
      </Link>
    </article>
  )
}

export default CocktailItem