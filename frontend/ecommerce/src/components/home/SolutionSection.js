import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const steps = [
  {
    title: "Satellite Image",
    description:
      "Acquire optical satellite imagery affected by cloud cover.",
  },
  {
    title: "AI Cloud Detection",
    description:
      "Identify cloud-covered regions using intelligent segmentation models.",
  },
  {
    title: "Multi-Source Fusion",
    description:
      "Combine SAR, historical observations and contextual Earth data.",
  },
  {
    title: "Cloud-Free Output",
    description:
      "Generate a reliable reconstructed Earth observation image.",
  },
];

function SolutionSection() {
  return (
    <section
      style={{
        background: "#081C38",
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
            How SATYA-EO Works
          </h2>

          <p
            style={{
              color: "#AFC3D8",
              maxWidth: "750px",
              margin: "20px auto",
            }}
          >
            Our AI-powered pipeline reconstructs cloud-covered satellite imagery
            using intelligent Earth Observation data fusion.
          </p>

        </div>

        <Row>

          {steps.map((step, index) => (

            <Col lg={3} md={6} key={index} className="mb-4">

              <Card
                style={{
                  background: "#102C53",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: "20px",
                  color: "#fff",
                  textAlign: "center",
                  padding: "35px",
                  height: "100%",
                }}
              >

                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "#1565FF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto 20px",
                    fontSize: "22px",
                    fontWeight: "700",
                  }}
                >
                  {index + 1}
                </div>

                <h5>{step.title}</h5>

                <p
                  style={{
                    color: "#C9D3DE",
                    marginTop: "15px",
                  }}
                >
                  {step.description}
                </p>

              </Card>

            </Col>

          ))}

        </Row>

      </Container>
    </section>
  );
}

export default SolutionSection;