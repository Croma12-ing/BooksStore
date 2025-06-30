import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const BookCard = ({ book }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(book);
  };

  return (
    <div className="book-card">
      <Link to={`/book/${book.id}`} className="book-link">
        <div className="book-image">
          <img src={book.image} alt={book.title} />
        </div>
        <div className="book-info">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">by {book.author}</p>
          <p className="book-category">{book.category}</p>
          <p className="book-price">₹{book.price}</p>
        </div>
      </Link>
      <button onClick={handleAddToCart} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default BookCard;