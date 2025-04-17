import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from "emailjs-com";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Gönder');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Gönderiliyor...");

    try {

      let response = await emailjs.sendForm(
        "service_7bqe429",
        "template_6wfnrr6",
        e.target,
        "YtjEXd03LcvjnW6Ar"
      );

      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: 'Mesajınız Başarıyla Gönderildi! İlginiz İçin Teşekkürler :)' });
    } catch (error) {
      setButtonText("Send");
      setStatus({ success: false, message: 'Mesaj Gönderilirken Bir Hata İle Karşılaşıldı. Lütfen Tekrar Deneyiniz!' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="İletişim" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Bize Ulaşın</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="firstName"
                          value={formDetails.firstName}
                          placeholder="Ad"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="lastName"
                          value={formDetails.lastName}
                          placeholder="Soyad"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="email"
                          value={formDetails.email}
                          placeholder="E-posta Adresi"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          name="phone"
                          value={formDetails.phone}
                          placeholder="Telefon Numarası"
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          name="message"
                          rows="6"
                          value={formDetails.message}
                          placeholder="Mesajınız"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                        ></textarea>
                        <button type="submit"><span>{buttonText || "Gönder"}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>
                            {status.message}
                          </p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
