import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function ComparisonSection() {
  return (
    <section
      style={{
        background: "#06162C",
        padding: "100px 0",
      }}
    >
      <Container>

        <div className="text-center mb-5">

          <h2
            style={{
              color: "#fff",
              fontWeight: "700",
            }}
          >
            Before vs After AI Reconstruction
          </h2>

          <p
            style={{
              color: "#AFC3D8",
              maxWidth: "700px",
              margin: "20px auto",
            }}
          >
            Compare cloud-covered satellite imagery with SATYA-EO's AI reconstructed output.
          </p>

        </div>

        <Row>

          <Col lg={5}>

            <Card
              style={{
                background:"#102C53",
                borderRadius:"20px",
                padding:"20px",
                border:"1px solid rgba(255,255,255,.08)"
              }}
            >

              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900"
                alt="Cloud Covered"
                className="img-fluid rounded"
              />

              <h4
                style={{
                  color:"#fff",
                  marginTop:"20px",
                  textAlign:"center"
                }}
              >
                Cloud Covered Image
              </h4>

            </Card>

          </Col>

          <Col
            lg={2}
            className="d-flex justify-content-center align-items-center"
          >

            <h1
              style={{
                color:"#49B6FF",
                fontSize:"60px",
                fontWeight:"700"
              }}
            >
                →
            </h1>

          </Col>

          <Col lg={5}>

            <Card
              style={{
                background:"#102C53",
                borderRadius:"20px",
                padding:"20px",
                border:"1px solid rgba(255,255,255,.08)"
              }}
            >

              <img
                src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=900"
                alt="Cloud Free"
                className="img-fluid rounded"
              />

              <h4
                style={{
                  color:"#fff",
                  marginTop:"20px",
                  textAlign:"center"
                }}
              >
                AI Reconstructed Output
              </h4>

            </Card>

          </Col>

        </Row>

      </Container>
    </section>
  );
}

export default ComparisonSection;