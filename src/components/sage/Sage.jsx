import './Sage.css';
import sage from '../assets/images/sagehome.png';
import jarblue from '../assets/images/bluejar.png';

const Sage = () => {
  return (
    <div className='sage'>
      <div className='sage-left'>
       <div className='image'>
       <img src={sage} alt=''/>
       </div>

       <div className='left-para'>
       <p>Olive oil, extracted from the fruit of the olive tree, has long been celebrated for its multifaceted benefits. Renowned for its culinary uses, this golden elixir transcends the kitchen to offer remarkable advantages in skincare. A face mask crafted from pure olive oil, when applied and gently massaged, provides a natural and luxurious skincare ritual, leaving the skin refreshed, hydrated, and imbued with a radiant glow.</p>
       </div>
      </div>

      <div className='sage-right'>

      <div className='right-para'>
      <h1>Sage</h1>
      <p>Hair Serum</p>
      </div>
      <div className='image'>
      <img src={jarblue} alt=''/>
      </div>
      </div>
    </div>
  )
}

export default Sage
