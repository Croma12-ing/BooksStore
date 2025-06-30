import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { books } from '../data/books';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);

  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="container">
        <div className="book-not-found">
          <h2>Book Not Found</h2>
          <p>The book you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/')} className="back-btn">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(book, quantity);
    alert(`Added ${quantity} copy(ies) of "${book.title}" to cart!`);
  };

  const handleBuyNow = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    addToCart(book, quantity);
    navigate('/checkout');
  };

  return (
    <div className="book-details-page">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-btn">
          ← Back
        </button>

        <div className="book-details">
          <div className="book-image-large">
            <img src={book.image} alt={book.title} />
          </div>

          <div className="book-info-detailed">
            <h1>{book.title}</h1>
            <p className="author">by {book.author}</p>
            <p className="category">{book.category}</p>
            <p className="price">₹{book.price}</p>

            <div className="book-meta">
              <p><strong>ISBN:</strong> {book.isbn}</p>
              <p><strong>Pages:</strong> {book.pages}</p>
              <p><strong>Publisher:</strong> {book.publisher}</p>
              <p><strong>Published:</strong> {book.publishedDate}</p>
            </div>

            <div className="description">
              <h3>Description</h3>
              <p>{book.description}</p>
            </div>

            <div className="purchase-options">
              <div className="quantity-selector">
                <label htmlFor="quantity">Quantity:</label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div className="action-buttons">
                <button onClick={handleAddToCart} className="add-to-cart-btn">
                  Add to Cart
                </button>
                <button onClick={handleBuyNow} className="buy-now-btn">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;