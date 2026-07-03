import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const problems = [
  {
    title: "Cloud Obstruction",
    description:
      "More than 60% of optical satellite images are partially or fully blocked by clouds, reducing their usability.",
  },
  {
    title: "Delayed Decision Making",
    description:
      "Incomplete satellite observations delay disaster response, crop monitoring and environmental assessment.",
  },
  {
    title: "Loss of Critical Information",
    description:
      "Traditional cloud masking removes valuable information instead of reconstructing the hidden surface.",
  },
];

function ProblemSection() {
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
            The Problem We Solve
          </h2>

          <p
            style={{
              color: "#AFC3D8",
              maxWidth: "700px",
              margin: "20px auto",
            }}
          >
            Cloud-covered satellite imagery limits accurate Earth observation,
            making critical decisions slower and less reliable.
          </p>

        </div>

        <Row>

          {problems.map((item, index) => (

            <Col md={4} key={index} className="mb-4">

              <Card
                style={{
                  background: "#102C53",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,.08)",
                  color: "#fff",
                  padding: "30px",
                  height: "100%",
                }}
              >

                <h4
                  style={{
                    color: "#49B6FF",
                    marginBottom: "20px",
                  }}
                >
                  {item.title}
                </h4>

                <p
                  style={{
                    color: "#C9D3DE",
                    lineHeight: "1.8",
                  }}
                >
                  {item.description}
                </p>

              </Card>

            </Col>

          ))}

        </Row>

      </Container>
    </section>
  );
}

export default ProblemSection;