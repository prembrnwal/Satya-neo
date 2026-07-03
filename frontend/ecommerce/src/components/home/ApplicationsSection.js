import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const applications = [
  {
    title: "Agriculture",
    icon: "🌾",
    description:
      "Monitor crop health, irrigation planning and agricultural productivity.",
  },
  {
    title: "Disaster Management",
    icon: "🚨",
    description:
      "Support rapid emergency response during floods, landslides and cyclones.",
  },
  {
    title: "Climate & Environment",
    icon: "🌍",
    description:
      "Track environmental changes and climate impact with cloud-free imagery.",
  },
  {
    title: "Forest Monitoring",
    icon: "🌳",
    description:
      "Detect deforestation, illegal activities and ecosystem degradation.",
  },
  {
    title: "Urban Planning",
    icon: "🏙️",
    description:
      "Enable infrastructure planning using accurate satellite observations.",
  },
  {
    title: "Water & Flood Intelligence",
    icon: "🌊",
    description:
      "Monitor rivers, reservoirs and flood-prone regions in near real time.",
  },
];

function ApplicationsSection() {
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
            Real World Applications
          </h2>

          <p
            style={{
              color: "#AFC3D8",
              maxWidth: "720px",
              margin: "20px auto",
            }}
          >
            SATYA-EO provides reliable Earth Observation data for governments,
            researchers, industries and disaster response agencies.
          </p>

        </div>

        <Row>

          {applications.map((app, index) => (

            <Col lg={4} md={6} key={index} className="mb-4">

              <Card
                style={{
                  background: "#102C53",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: "20px",
                  color: "white",
                  padding: "30px",
                  height: "100%",
                  transition: "0.3s",
                }}
              >

                <div
                  style={{
                    fontSize: "45px",
                    marginBottom: "20px",
                  }}
                >
                  {app.icon}
                </div>

                <h4>{app.title}</h4>

                <p
                  style={{
                    color: "#C9D3DE",
                    marginTop: "15px",
                    lineHeight: "1.8",
                  }}
                >
                  {app.description}
                </p>

              </Card>

            </Col>

          ))}

        </Row>

      </Container>
    </section>
  );
}

export default ApplicationsSection;