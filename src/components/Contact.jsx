import Script from "next/script";

export default function Contact() {
  return (
    <div>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        strategy="lazyOnload"
      />
      <Script
        noModule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        strategy="lazyOnload"
      />
      <div className="contact-container">
        <div className="text">
          <h2>Get the best personal or corporate results with us</h2>
        </div>
        <div className="contact-box">
          <div className="box mail">
            <div className="box-icon">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="box-text">
              <p>Professionalism</p>
              <span>type an email</span>
            </div>
          </div>

          {/*  */}

          <div className="box whatsapp">
            <div className="box-icon">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </div>
            <div className="box-text">
              <p>More Agile</p>
              <span>WhatsApp Message</span>
            </div>
          </div>

          {/*  */}

          <div
            className="box instagram"
            onClick={() => {
              window.location.href =
                "https://www.instagram.com/levelupamerica?igsh=MTk1bWI2c215OGYxZQ%3D%3D&utm_source=qr";
            }}
          >
            <div className="box-icon">
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
            <div className="box-text">
              <p>Follow Us</p>
              <span>Discover News</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
