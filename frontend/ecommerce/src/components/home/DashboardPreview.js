import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function DashboardPreview() {
  return (
    <section
      style={{
        background: "#081C38",
        padding: "110px 0",
      }}
    >
      <Container>

        <Row className="align-items-center">

          <Col lg={5}>

            <span
              style={{
                color:"#49B6FF",
                fontWeight:"600",
                letterSpacing:"2px"
              }}
            >
              LIVE DEMONSTRATION
            </span>

            <h2
              style={{
                color:"#fff",
                fontWeight:"700",
                marginTop:"20px"
              }}
            >
              AI Cloud Removal Dashboard
            </h2>

            <p
              style={{
                color:"#C9D3DE",
                lineHeight:"1.9",
                marginTop:"20px"
              }}
            >
              Upload satellite imagery, visualize cloud detection,
              compare reconstruction results and monitor AI confidence
              scores in one unified dashboard.
            </p>

            <Button
              style={{
                background:"#1565FF",
                border:"none",
                padding:"12px 30px",
                marginTop:"20px"
              }}
            >
              Open Dashboard
            </Button>

          </Col>

          <Col lg={7}>

            <div
              style={{
                background:"#102C53",
                borderRadius:"22px",
                padding:"20px",
                border:"1px solid rgba(255,255,255,.08)",
                boxShadow:"0 20px 60px rgba(0,0,0,.35)"
              }}
            >

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400"
                alt="Dashboard Preview"
                className="img-fluid rounded"
              />

            </div>

          </Col>

        </Row>

      </Container>
    </section>
  );
}

export default DashboardPreview;