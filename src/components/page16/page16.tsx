import "./page16.css";

export default function ContactCard() {
  return (
    <div className="contacts-container">
      <div className="contacts-left">
        <img
          src="./public/logo/UASkyline_logo5.png"
          alt="UASkyline Logo"
          className="contacts-logo"
        />
        <div className="contacts-content">
          <h2 className="contacts-title">КОНТАКТИ</h2>

          <div className="contacts-item">
            <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
<path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 14 6 L 36 6 C 40.430666 6 44 9.5693339 44 14 L 44 36 C 44 40.430666 40.430666 44 36 44 L 14 44 C 9.5693339 44 6 40.430666 6 36 L 6 14 C 6 9.5693339 9.5693339 6 14 6 z M 13 15 C 11.35503 15 10 16.35503 10 18 L 10 32 C 10 33.64497 11.35503 35 13 35 L 37 35 C 38.64497 35 40 33.64497 40 32 L 40 18 C 40 16.35503 38.64497 15 37 15 L 13 15 z M 13.414062 17 L 36.583984 17 L 27.677734 25.892578 C 26.18494 27.382984 23.796834 27.382819 22.304688 25.890625 L 13.414062 17 z M 38 18.412109 L 38 31.587891 L 31.402344 25 L 38 18.412109 z M 12 18.414062 L 18.585938 25 L 12 31.585938 L 12 18.414062 z M 29.988281 26.412109 L 36.585938 33 L 13.414062 33 L 20 26.414062 L 20.890625 27.304688 C 23.146478 29.56054 26.832638 29.562194 29.089844 27.308594 L 29.988281 26.412109 z"></path>
</svg></span>
            <p>info@uaskylinegmail.com</p>
          </div>

          <div className="contacts-item">
            <span className="icon"><img width="40" height="40" src="https://img.icons8.com/ios/50/phone--v1.png" alt="phone--v1"/></span>
            <p>+380(97)-639-6858</p>
          </div>

          <div className="qr-codes">
            <div className="qr-item">
              <img src="./public/qr/you_control.png" alt="YouControl QR" />
              <p>YouControl</p>
            </div>
            <div className="qr-item">
              <img src="./public/qr/you_control.png" alt="Instagram QR" />
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contacts-right">
      </div>
    </div>
  );
}