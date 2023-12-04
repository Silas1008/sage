import production from '../assets/images/team.png';
import './Production.css';

const Production = () => {
  return (
    <div className='production'>
      <div className='production-content'>
        <div className='title'>
          <h1>Production team</h1>
          <hr />
        </div>
        <div className="image-container">
          <img src={production} alt='' />
          <p>Our beauty production</p>
          <p>Our consumer's production</p>
        </div>
      </div>
    </div>
  );
}

export default Production;
