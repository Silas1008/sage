import './Skincare.css'
import skintips from '../assets/images/skintips.jpg';
import skintips2 from '../assets/images/skintips2.jpg';
import skintips3 from '../assets/images/skinwebsite.jpg';

const Skincare = () => {
  return (
    <div className='skincare'>
    <div className='heading'>
    <h1>Skin care tips</h1>
    <hr/>
    </div>

    <div className='skintip-images'>
      <img src={skintips} alt=''/>
      <img src={skintips2} alt=''/>
      <img src={skintips3} alt=''/>
    </div>
      
    </div>
  )
}

export default Skincare
