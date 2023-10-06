import contactImg from "../../assets/contact.jpg";
import "./contact.css";

export default function Contact() {
  const handleSend = () => {
    alert(`Thanks For Your Message!`);
  };

  return (
    <div className="contact">
      <img src={contactImg} alt="contact-image" />
      <div className="contact-form">
        <form>
          <label>
            Your Full Name
            <input type="text" />
          </label>
          <label>
            Your Email
            <input type="text" />
          </label>
          <label>
            Your message
            <input type="text" className="textarea" />
          </label>

          <button onClick={handleSend}>Send</button>
        </form>
      </div>
    </div>
  );
}
