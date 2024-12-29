import React from "react";
import './newsletter.css'

export default function Newsletter() {
  return (
    <>
      <div className="newsletter-div">
        <header>
          <h1>Join Our Newsletter</h1>
          <p>Stay ahead with the latest updates and exclusive offers</p>
        </header>

        <main>
          <section id="sign-up-form">
            <form id="newsletter-form" noValidate>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
                <span className="error-message"></span>
              </div>
              <button type="submit">Subscribe Now</button>
            </form>
          </section>
        </main>

        
      </div>
      
    </>
  );
}
