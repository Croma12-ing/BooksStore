const AboutUs = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1>About BookStore</h1>
        
        <div className="about-content">
          <section className="about-section">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, BookStore has been your trusted partner in discovering 
              amazing books from around the world. We believe that every book has the 
              power to transform lives, inspire minds, and connect people across cultures.
            </p>
          </section>
          
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              To make quality books accessible to everyone, everywhere. We curate a 
              diverse collection of titles spanning every genre and interest, ensuring 
              that every reader finds their perfect match.
            </p>
          </section>
          
          <section className="about-section">
            <h2>Why Choose BookStore?</h2>
            <ul>
              <li>Extensive collection of books from around the world</li>
              <li>Competitive prices and regular discounts</li>
              <li>Fast and reliable shipping</li>
              <li>Excellent customer service</li>
              <li>Easy returns and exchanges</li>
              <li>Secure payment processing</li>
            </ul>
          </section>
          
          <section className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Quality</h3>
                <p>We carefully select every book in our collection to ensure the highest quality for our customers.</p>
              </div>
              <div className="value-item">
                <h3>Accessibility</h3>
                <p>Books should be available to everyone. We work hard to keep our prices fair and shipping costs low.</p>
              </div>
              <div className="value-item">
                <h3>Community</h3>
                <p>We believe in building a community of readers who share their love for books and learning.</p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>We continuously improve our platform to provide the best possible shopping experience.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;