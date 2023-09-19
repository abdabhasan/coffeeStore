import MyMap from "./MyMap";
import styled from "styled-components";

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("message sent to the company");
  };

  return (
    <div className="contact-us">
      <div className="title">
        <h3>موقعنا</h3>
      </div>
      <MyMap />
      <div className="contact-info title mt-5">
        <h3 className="my-5">ساعات وأيام العمل</h3>
        <h4>من الأحد إلى الجمعة من الثامنة صباحا حتى السادسة مساء</h4>
        <Form>
          <h3 className="mb-5">أرسل لنا رسالة</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="الإسم" required />
            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              required
            />
            <textarea name="message" placeholder="رسالتك" required />
            <input type="submit" value="Send Message" />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;

const Form = styled.section`
  .contact-form {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
  }

  .contact-form label {
    display: block;
    margin-bottom: 5px;
  }

  .contact-form button {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .contact-form-success {
    color: green;
  }

  .contact-form-error {
    color: red;
  }
`;
