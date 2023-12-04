import './NewCollections.css'; 
import new_data from '../assets/new_data';
import Item from '../../components/item/Item';

const NewCollections = () => {
  return (
    <div className='newcollections'>
      <h1>Season Products</h1>
      <hr/>

      <div className='collections'>
      {new_data.map((item,i) => {
       return <Item key={i} id={item.id} name={item.name} image={item.image} prices={item.prices} imageWidth={250}/>
      })}
      </div>
    </div>
  )
}

export default NewCollections
