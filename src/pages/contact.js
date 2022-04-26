import Title from "../components/Title"

import '../styles/Contact.css'

const ContactPage = () => {
  return (
    <section className="contact">
      <div className="container">
        <Title text="Contact Us" />
        <a className="contact__link" href="https://cyrilgouv.com" target="_blank" rel="noopener noreferrer">hello@cyrilgouv.com</a>
      </div>
    </section>
  )
}

export default ContactPage