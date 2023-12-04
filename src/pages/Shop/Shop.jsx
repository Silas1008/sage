import './Shop.css'
import Hero from '../../components/Hero/Hero'
import Popular from '../../components/Popular/Popular'
import Sage from '../../components/sage/Sage'
import Skincare from '../../components/Skincare/Skincare'
import NewCollections from '../../components/NewCollections/NewCollections'
import NewsLetter from '../../components/Newsletter/NewsLetter'
import Production from '../../components/Production/Production'

const Shop = () => {
  return (
    <div className='shop'>
      <Hero/>
      <Popular/>
      <Sage/>
      <Skincare/>
      <NewCollections/>
      <Production/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
