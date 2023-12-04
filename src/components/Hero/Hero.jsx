import './Hero.css';
import banner from '../assets/images/websitebanner.png';

const Hero = () => {
  return (
    <div className='hero'>
       <div className='herobanner'>
       <img src={banner} alt=''/>
       </div>
    </div>
  )
}

export default Hero
