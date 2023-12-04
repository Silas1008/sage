import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className="newsletter-container">
      <div className="form">
        <form>
          <span className="title">Subscribe To Our Newsletter.</span>
          <p className="description">
          Subscribe to our newsletter for a radiant inbox that glows with exciting product launches and exclusive offers! Your beauty journey starts with a click – subscribe now for a daily dose of glamour and self-care.
          </p>
          <div>
            <input className="input-box" placeholder="Enter your email" type="email" name="email" id="email-address" />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
