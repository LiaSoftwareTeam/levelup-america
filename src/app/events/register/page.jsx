"use client"
import "./style.css"
import { useState } from 'react';
import Link from "next/link";

export default function RegisterE() {
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div>
      <div className="container-reg">
        <header>
          <h1>Checkout</h1>
          <Link href="/" className="back-link">← Back</Link>
        </header>

        <main className="checkout-container">
          <div className="checkout-form">
            <div className="form-section">
              <h2>Basic Informations</h2>
              <input type="text" placeholder="Full name" />
              <input type="email" placeholder="Email address" />
              <input type="password" placeholder="Password" />
            </div>

            <div className="form-section">
              <h2>Payment Details</h2>
              <div className="payment-options">
                <label className="radio-container">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="credit" 
                    checked={paymentMethod === 'credit'} 
                    onChange={handlePaymentChange} 
                  />
                  <span className="radio-label">Credit card</span>
                </label>
                <label className="radio-container">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="paypal" 
                    checked={paymentMethod === 'paypal'} 
                    onChange={handlePaymentChange} 
                  />
                  <span className="radio-label">PayPal</span>
                </label>
              </div>

              {/* Conditionally render the Credit Card form or PayPal button */}
              {paymentMethod === 'credit' && (
                <div id="credit-card-form">
                  <input type="text" placeholder="Name on card" />
                  <input type="text" placeholder="Card number" />
                  <div className="card-details">
                    <input type="text" placeholder="Expiry date" />
                    <input type="text" placeholder="CVC" />
                  </div>
                </div>
              )}

              {paymentMethod === 'paypal' && (
                <div id="paypal-button">
                  <button className="paypal-btn">Pay with PayPal</button>
                </div>
              )}
            </div>
          </div>

          <div className="summary-card">
            <h2>Summary</h2>
            <div className="course-item">
              <div className="course-info">
                <div className="course-icon">CS</div>
                <div className="course-details">
                  <h3>Masterclass</h3>
                  <span className="price">$109</span>
                </div>
              </div>
            </div>
            <div className="course-item">
              <div className="course-info">
                <div className="course-icon">MT</div>
                <div className="course-details">
                  <h3>Materials</h3>
                  <span className="price">$10</span>
                </div>
              </div>
            </div>
            <div className="coupon-section">
              <input type="text" placeholder="Coupon code" />
              <button className="apply-btn">Apply</button>
            </div>
            <div className="price-summary">
              <div className="price-row">
                <span>Subtotal</span>
                <span>$119</span>
              </div>
              <div className="price-row">
                <span>Discount</span>
                <span>$0</span>
              </div>
              <div className="price-row total">
                <span>Total</span>
                <span>$119</span>
              </div>
            </div>
            <button className="checkout-btn">Checkout Now</button>
          </div>
        </main>
      </div>
    </div>
  );
}

