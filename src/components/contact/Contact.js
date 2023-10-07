import { useState } from "react";
import contactImg from "../../assets/contact.jpg";
import "./contact.css";

export default function Contact() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [massege, setMassege] = useState(null);

  const handleSend = () => {
    if (name && email && massege) {
      alert(
        `Thanks for your massege, We will send Email to ${email}. Good Luck 😃`
      );
    } else {
      alert(`Please Enter Your Info and Your Massege Correctly!!!`);
    }
  };

  return (
    <div className="contact">
      <img src={contactImg} alt="contact-image" />
      <div className="contact-form">
        <form>
          <label>
            Your Full Name
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label>
            Your Email
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label>
            Your message
            <input
              type="text"
              className="textarea"
              onChange={(e) => {
                setMassege(e.target.value);
              }}
            />
          </label>

          <button onClick={handleSend}>Send</button>
        </form>
      </div>
    </div>
  );
}
