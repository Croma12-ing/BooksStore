import React from "react";

const ShippingPolicy = () => {
    return (
        <div className="page-container">
            <h1>Shipping & Delivery Policy</h1>
            <div className="policy-content">
                <div className="policy-section">
                    <p><strong>Effective Date:</strong> 30 June 2025</p>
                    <p><strong>Last Updated:</strong> 30 June 2025</p>
                    <p>At <strong>[Your Store Name]</strong>, we are committed to delivering your favorite books quickly, safely, and affordably. This Shipping & Delivery Policy outlines how your order will be processed and shipped.</p>
                </div>

                <div className="policy-section">
                    <h2>Shipping Coverage</h2>
                    <p>We currently offer shipping across <strong>India</strong>. For international delivery, please contact our support team before placing your order.</p>
                </div>

                <div className="policy-section">
                    <h2>Order Processing Time</h2>
                    <ul>
                        <li>Orders are processed within <strong>1–2 business days</strong> (Monday to Friday).</li>
                        <li>Orders placed on weekends or holidays will be processed the next working day.</li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2>Delivery Time Estimates</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Delivery Type</th>
                                <th>Estimated Time</th>
                                <th>Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Standard Shipping</td>
                                <td>4–7 business days</td>
                                <td>₹49 (Free over ₹499)</td>
                            </tr>
                            <tr>
                                <td>Express Shipping</td>
                                <td>1–3 business days</td>
                                <td>₹149</td>
                            </tr>
                        </tbody>
                    </table>
                    <p><em>Note: Delivery times may vary due to unforeseen circumstances (e.g., weather, courier delays).</em></p>
                </div>

                <div className="policy-section">
                    <h2>Tracking Your Order</h2>
                    <ul>
                        <li>Once your order is shipped, you will receive a tracking link via email/SMS.</li>
                        <li>You can also check the status anytime from the <strong>My Orders</strong> section.</li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2>Packaging</h2>
                    <p>All books are securely packed using eco-friendly materials to ensure they arrive in perfect condition.</p>
                </div>

                <div className="policy-section">
                    <h2>Delivery Failures</h2>
                    <ul>
                        <li>If a delivery attempt fails due to incorrect address or unavailability, our courier may try again or return the item.</li>
                        <li>Additional shipping charges may apply for redelivery.</li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2>Shipping Invoices</h2>
                    <p>A digital invoice will be sent to your registered email and will also be available in your order history.</p>
                </div>

                <div className="policy-section">
                    <h2>Need Help?</h2>
                    <p>For any queries related to shipping or delivery, feel free to contact us:</p>
                    <ul>
                        <li><strong>Email:</strong> support@[yourdomain].com</li>
                        <li><strong>Phone:</strong> +91-XXXXXXXXXX</li>
                        <li><strong>Working Hours:</strong> 10 AM to 6 PM (Mon–Sat)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ShippingPolicy;
