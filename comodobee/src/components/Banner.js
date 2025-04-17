import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/kovan.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Comodo Bee</span>
                  <h1>Otonom Arıcılığa Hoşgeldiniz!</h1>
                  <p>Comodo Bee; arıcılıkta insan gücünü minimize ederek enerji ve zamandan tasarruf sağlayan yenilikçi bir otonom arı kovanı sistemidir. Sensörler ve tek kartlı bilgisayarlarla donatılmış bu akıllı kovan, sıcaklık, nem, bal hasadı ve arı sağlığı gibi kritik süreçleri otomatik olarak yönetir. Kullanıcılar, mobil uygulama üzerinden kovanlarını uzaktan takip edip kontrol edebilirler. Comodo Bee, arıcılığı daha verimli, sürdürülebilir ve teknolojik hale getirmek için geliştirilmiştir.</p>
                  <button onClick={() => window.location.hash = '#connect'}>Bizimle İletişime Geçin! <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
