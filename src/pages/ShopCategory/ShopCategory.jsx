import { useContext } from 'react'
import './ShopCategory.css'
import {ShopContext} from '../../context/ShopContext';
import dropdown from '../../components/assets/images/dropdown.png';
import Item from '../../components/item/Item';

const ShopCategory = (props) => {

  const {all_products} = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img src={props.banner} alt=''/>
      <div className='shopcategory-indexSort'>
      <p>
      <span>Showing 1-10</span> out of 20 products
      </p>
      
      </div>
      <div className='shopcategory-products'>
      {all_products.map((item,i) => {
        if (props.category===item.category) {
          return <Item key={i} id={item.id} name={item.name} image={item.image} prices={item.prices} imageWidth={300}/>
        } else {
          return null
        }
      })}
      </div>
    </div>
  )
}

export default ShopCategory
