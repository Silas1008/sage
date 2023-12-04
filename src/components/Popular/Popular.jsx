import './Popular.css';
import POPULAR from '../assets/popular.js';
import Item from '../item/Item.jsx';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Trending products</h1>
      <hr/>

      <div className='trending'>
      {POPULAR.map((item,i) => {
        return <Item key={i} id={item.id} name={item.name} image={item.image} prices={item.prices} imageWidth={300}/>
      })}
      </div>
    </div>
  )
}

export default Popular
