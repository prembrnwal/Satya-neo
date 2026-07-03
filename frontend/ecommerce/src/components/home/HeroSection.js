import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaSatellite, FaArrowRight } from "react-icons/fa";

function HeroSection() {
  return (
    <section
      style={{
        minHeight: "90vh",
        background: "#071B34",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="align-items-center">

          <Col lg={6}>
            <span
              style={{
                color: "#49B6FF",
                fontWeight: "600",
                letterSpacing: "2px",
              }}
            >
              AI Powered Earth Observation
            </span>

            <h1
              style={{
                color: "#fff",
                fontSize: "58px",
                fontWeight: "700",
                marginTop: "20px",
              }}
            >
              Beyond Cloud Removal
            </h1>

            <h3
              style={{
                color: "#49B6FF",
                marginBottom: "25px",
              }}
            >
              Satellite Assisted Trustworthy Earth Observation
            </h3>

            <p
              style={{
                color: "#C9D3DE",
                lineHeight: "1.8",
                fontSize: "18px",
              }}
            >
              SATYA-EO reconstructs cloud-covered satellite imagery
              using Artificial Intelligence and multi-source Earth
              Observation data to generate reliable cloud-free outputs.
            </p>

            <div className="mt-4">

              <Button
                style={{
                  background: "#1565FF",
                  border: "none",
                  padding: "12px 28px",
                  marginRight: "15px",
                }}
              >
                <FaSatellite /> Run Demo
              </Button>

              <Button
                variant="outline-light"
                style={{
                  padding: "12px 28px",
                }}
              >
                Learn More <FaArrowRight />
              </Button>

            </div>
          </Col>

          <Col lg={6} className="text-center">

            <img
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=900"
              alt="Earth"
              className="img-fluid rounded shadow"
            />

          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;