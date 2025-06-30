import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { dbHelpers } from '../lib/supabase';

const OrderConfirmation = () => {
  const location = useLocation();
  const [order, setOrder] = useState(location.state?.order);
  const [loading, setLoading] = useState(!order);

  useEffect(() => {
    // If no order data in state, try to get the latest order from database
    if (!order) {
      const fetchLatestOrder = async () => {
        try {
          const orders = await dbHelpers.getUserOrders();
          if (orders && orders.length > 0) {
            setOrder(orders[0]); // Get the most recent order
          }
        } catch (error) {
          console.error('Error fetching order:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchLatestOrder();
    }
  }, [order]);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Loading order details...</div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="container">
        <div className="order-not-found">
          <h2>Order Not Found</h2>
          <Link to="/" className="back-home">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="order-confirmation-page">
      <div className="container">
        <div className="confirmation-content">
          <div className="success-icon">✅</div>
          <h1>Order Confirmed!</h1>
          <p className="confirmation-message">
            Thank you for your order. Your books will be shipped soon!
          </p>
          
          <div className="order-details">
            <h2>Order Details</h2>
            <p><strong>Order ID:</strong> #{order.id}</p>
            <p><strong>Order Date:</strong> {new Date(order.created_at || order.orderDate).toLocaleDateString()}</p>
            <p><strong>Total Amount:</strong> ₹{(order.total_amount || order.total).toFixed(2)}</p>
            <p><strong>Status:</strong> {order.status || 'Confirmed'}</p>
          </div>
          
          <div className="ordered-items">
            <h3>Items Ordered</h3>
            {(order.order_items || order.items || []).map((item, index) => (
              <div key={item.id || index} className="ordered-item">
                <img src={item.image || '/placeholder-book.jpg'} alt={item.book_title || item.title} />
                <div className="item-info">
                  <h4>{item.book_title || item.title}</h4>
                  <p>by {item.book_author || item.author}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>₹{((item.book_price || item.price) * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="shipping-info">
            <h3>Shipping Address</h3>
            {order.shipping_address || order.shippingInfo ? (
              <>
                <p>{(order.shipping_address || order.shippingInfo).fullName}</p>
                <p>{(order.shipping_address || order.shippingInfo).address}</p>
                <p>
                  {(order.shipping_address || order.shippingInfo).city}, {(order.shipping_address || order.shippingInfo).state} {(order.shipping_address || order.shippingInfo).zipCode}
                </p>
                <p>{(order.shipping_address || order.shippingInfo).country}</p>
                {(order.shipping_address || order.shippingInfo).phone && (
                  <p>Phone: {(order.shipping_address || order.shippingInfo).phone}</p>
                )}
              </>
            ) : (
              <p>Shipping address not available</p>
            )}
          </div>
          
          <div className="confirmation-actions">
            <Link to="/" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;