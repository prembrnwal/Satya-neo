import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer
      style={{
        background: "#050816",
        color: "#fff",
        padding: "60px 0 25px",
        borderTop: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <Container>

        <Row>

          <Col md={5} className="mb-4">

            <h3
              style={{
                color: "#49B6FF",
                fontWeight: "700",
              }}
            >
              SATYA-EO
            </h3>

            <p
              style={{
                color: "#BFC7D5",
                lineHeight: "1.8",
                marginTop: "15px",
              }}
            >
              SATYA-EO is an AI-powered Earth Observation platform that
              reconstructs cloud-covered satellite imagery using intelligent
              data fusion and advanced deep learning models for reliable,
              cloud-free analysis.
            </p>

          </Col>

          <Col md={3} className="mb-4">

            <h5>Quick Links</h5>

            <p>Home</p>
            <p>Technology</p>
            <p>Applications</p>
            <p>Dashboard</p>

          </Col>

          <Col md={4} className="mb-4">

            <h5>Project</h5>

            <p>ISRO Hackathon 2026</p>
            <p>Artificial Intelligence</p>
            <p>Earth Observation</p>
            <p>Cloud Removal</p>

          </Col>

        </Row>

        <hr
          style={{
            borderColor: "rgba(255,255,255,.08)",
          }}
        />

        <div
          style={{
            textAlign: "center",
            color: "#9FB0C4",
          }}
        >
          © 2026 SATYA-EO | AI Powered Earth Observation Platform
        </div>

      </Container>
    </footer>
  );
}

export default Footer;