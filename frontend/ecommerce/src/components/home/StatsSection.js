import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const stats = [
  {
    number: "95%",
    title: "Cloud Removal Accuracy",
    description:
      "Advanced AI reconstructs cloud-covered satellite imagery with high precision.",
  },
  {
    number: "15+",
    title: "Earth Observation Sources",
    description:
      "Supports multispectral satellite imagery from multiple EO platforms.",
  },
  {
    number: "24/7",
    title: "Near Real-Time",
    description:
      "Fast image processing for emergency response and continuous monitoring.",
  },
  {
    number: "6+",
    title: "Use Cases",
    description:
      "Agriculture, Disaster Management, Environment, Climate and Urban Planning.",
  },
];

function StatsSection() {
  return (
    <section
      style={{
        background: "#081C38",
        padding: "90px 0",
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
            Trusted Earth Observation Platform
          </h2>

          <p
            style={{
              color: "#AFC3D8",
            }}
          >
            Delivering intelligent cloud-free satellite imagery powered by AI.
          </p>

        </div>

        <Row>

          {stats.map((item, index) => (

            <Col lg={3} md={6} className="mb-4" key={index}>

              <Card
                style={{
                  background: "#102C53",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: "20px",
                  padding: "35px",
                  height: "100%",
                  color: "white",
                }}
              >

                <h1
                  style={{
                    color: "#49B6FF",
                    fontWeight: "700",
                  }}
                >
                  {item.number}
                </h1>

                <h5>{item.title}</h5>

                <p
                  style={{
                    color: "#C9D3DE",
                    marginTop: "15px",
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

export default StatsSection;