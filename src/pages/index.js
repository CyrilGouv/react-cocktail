import Title from '../components/Title'
import CocktailList from '../components/CocktailList'


const IndexPage = () => {
  return (
    <section className='home'>
      <div className="container">
        <Title text="Our Cocktails" />

        <CocktailList />
      </div>
    </section>
  )
}

export default IndexPage