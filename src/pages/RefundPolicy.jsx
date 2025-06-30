const RefundPolicy = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1>Refund and Cancellation Policy</h1>
        
        <div className="policy-content">
          <p className="last-updated">Last updated: January 1, 2025</p>
          
          <section className="policy-section">
            <h2>1. Order Cancellation</h2>
            <h3>Before Shipment</h3>
            <p>
              You can cancel your order at any time before it has been shipped. 
              Once your order is canceled, you will receive a full refund within 
              3-5 business days.
            </p>
            
            <h3>After Shipment</h3>
            <p>
              Once your order has been shipped, it cannot be canceled. However, 
              you can return the items once you receive them according to our 
              return policy below.
            </p>
          </section>
          
          <section className="policy-section">
            <h2>2. Returns</h2>
            <h3>Return Window</h3>
            <p>
              You have 30 days from the date of delivery to return items for a full refund.
            </p>
            
            <h3>Return Conditions</h3>
            <p>To be eligible for a return, items must:</p>
            <ul>
              <li>Be in original condition</li>
              <li>Have all original packaging and materials</li>
              <li>Not be damaged by normal wear and tear</li>
              <li>Not have been marked or written in (for books)</li>
            </ul>
            
            <h3>Non-Returnable Items</h3>
            <p>The following items cannot be returned:</p>
            <ul>
              <li>Digital products or downloads</li>
              <li>Items marked as final sale</li>
              <li>Personalized or customized items</li>
              <li>Items damaged by misuse</li>
            </ul>
          </section>
          
          <section className="policy-section">
            <h2>3. Refund Process</h2>
            <h3>How to Request a Refund</h3>
            <ol>
              <li>Contact our customer service team</li>
              <li>Provide your order number and reason for return</li>
              <li>Receive return authorization and instructions</li>
              <li>Ship items back using provided return label</li>
              <li>Receive refund confirmation once items are processed</li>
            </ol>
            
            <h3>Refund Timeline</h3>
            <ul>
              <li>Refund processing: 3-5 business days after we receive returned items</li>
              <li>Credit card refunds: 5-10 business days</li>
              <li>PayPal refunds: 1-3 business days</li>
            </ul>
          </section>
          
          <section className="policy-section">
            <h2>4. Return Shipping</h2>
            <p>
              We provide prepaid return labels for eligible returns. Return shipping 
              costs will be deducted from your refund unless the return is due to our error.
            </p>
            
            <h3>Free Return Shipping</h3>
            <p>We cover return shipping costs when:</p>
            <ul>
              <li>We sent the wrong item</li>
              <li>The item arrived damaged</li>
              <li>The item has a manufacturing defect</li>
            </ul>
          </section>
          
          <section className="policy-section">
            <h2>5. Exchanges</h2>
            <p>
              We currently do not offer direct exchanges. If you need a different item, 
              please return the original item for a refund and place a new order.
            </p>
          </section>
          
          <section className="policy-section">
            <h2>6. Damaged or Defective Items</h2>
            <p>
              If you receive a damaged or defective item, please contact us within 
              7 days of delivery. We will provide a full refund or replacement at no cost to you.
            </p>
          </section>
          
          <section className="policy-section">
            <h2>7. Late or Missing Refunds</h2>
            <p>
              If you haven't received your refund within the expected timeframe:
            </p>
            <ol>
              <li>Check your bank account or credit card statement</li>
              <li>Contact your bank or credit card company</li>
              <li>Contact us with your refund confirmation number</li>
            </ol>
          </section>
          
          <section className="policy-section">
            <h2>8. Contact Information</h2>
            <p>For any questions about returns or refunds, contact us:</p>
            <p>
              Email: returns@bookstore.com<br />
              Phone: (555) 123-4567<br />
              Address: BookStore Returns Department<br />
              123 Book Street, Reading City, RC 12345
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;