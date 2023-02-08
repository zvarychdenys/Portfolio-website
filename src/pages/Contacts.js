const Contacts = () => {
    const handleEmailClick = () => {
      console.log("Email link clicked");
    };
  
    const handlePhoneClick = () => {
      console.log("Phone link clicked");
    };
  
    return (
      <main className="section3">
        <div className="container">
          <h1 className="title-1">Contacts</h1>
  
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Cracow, Poland</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp</h2>
              <p>
                <a href="tel:+48730033465" onClick={handlePhoneClick}>
                  +48 730033465
                </a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:denys.zvr@gmail.com" onClick={handleEmailClick}>
                  denys.zvr@gmail.com
                </a>
              </p>
            </li>
          </ul>
        </div>
      </main>
    );
  };
  
  export default Contacts;
  