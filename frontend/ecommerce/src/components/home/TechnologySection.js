import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const pipeline = [
  "Satellite Image",
  "Cloud Detection",
  "Data Fusion",
  "AI Reconstruction",
  "Cloud-Free Output",
  "Web Dashboard",
];

function TechnologySection() {
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
            Technology Architecture
          </h2>

          <p
            style={{
              color: "#AFC3D8",
              maxWidth: "700px",
              margin: "20px auto",
            }}
          >
            SATYA-EO combines Artificial Intelligence, Earth Observation data,
            and cloud reconstruction models into one intelligent pipeline.
          </p>

        </div>

        <Row className="justify-content-center">

          {pipeline.map((step, index) => (
            <React.Fragment key={index}>

              <Col lg={2} md={4} sm={6} className="text-center mb-4">

                <div
                  style={{
                    background: "#102C53",
                    borderRadius: "18px",
                    padding: "30px 20px",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,.08)",
                    minHeight: "140px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "600",
                  }}
                >
                  {step}
                </div>

              </Col>

              {index !== pipeline.length - 1 && (
                <Col
                  lg={1}
                  className="d-none d-lg-flex justify-content-center align-items-center"
                >
                  <span
                    style={{
                      fontSize: "40px",
                      color: "#49B6FF",
                    }}
                  >
                    →
                  </span>
                </Col>
              )}

            </React.Fragment>
          ))}

        </Row>

      </Container>
    </section>
  );
}

export default TechnologySection;