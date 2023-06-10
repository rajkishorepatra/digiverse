import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const MarketingComparison = () => {
  return (
    <Container>
      <h2 className="text-white my-4">
        <strong>
          Growth Comparison: Digital Marketing vs Traditional Marketing
        </strong>
      </h2>
      <Row>
        <Col md={6}>
          <Card className="digi-card mark-card">
            <Card.Body>
              <Card.Title>
                <strong>Digital Marketing</strong>
              </Card.Title>
              <Card.Text className="text-secondary text-overflow">
                Digital marketing has grown exponentially in recent years, as
                more and more people are spending time online. This growth has
                been driven by a number of factors, including:
              </Card.Text>
              <ul>
                <li>
                  <span className="text-primary">
                    The Rise of Social Media:
                  </span>{" "}
                  Social media platforms like Facebook, Twitter, and Instagram
                  have given businesses a new way to reach their target
                  audience.
                </li>{" "}
                <br />
                <li>
                  <span className="text-primary">
                    The Growth of E-commerce:
                  </span>{" "}
                  E-commerce has made it easier for businesses to sell their
                  products and services online, reaching a global audience.
                </li>{" "}
                <br />
                <li>
                  <span className="text-primary">
                    The Increasing Use of Mobile Devices:
                  </span>{" "}
                  More and more people are using their smartphones and tablets
                  to access the internet, which has created new opportunities
                  for businesses to reach their target.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="trad-card mark-card">
            <Card.Body>
              <Card.Title>
                <strong>Traditional Marketing</strong>
              </Card.Title>
              <Card.Text className="text-secondary text-overflow">
                Traditional marketing has also grown in recent years, albeit at
                a slower pace than digital marketing. This growth has been
                driven by a number of factors, including:
              </Card.Text>
              <ul>
                <li>
                  <span className="text-primary">
                    The Rise of Cable and Satellite Television:
                  </span>{" "}
                  Cable and satellite television have given businesses a new way
                  to reach their target audience.
                </li>{" "}
                <br />
                <li>
                  <span className="text-primary">
                    The Growth of Direct Mail:
                  </span>{" "}
                  Direct mail has given businesses a way to target their
                  marketing messages to specific demographics.
                </li>{" "}
                <br />
                <li>
                  <span className="text-primary">
                    The Increasing use of Out-of-Home Advertising:
                  </span>{" "}
                  Out-of-home advertising, such as billboards and bus shelters,
                  has given businesses a way to reach their target audience in a
                  non-intrusive way.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="conclusion-container">
      <h4 className="text-white my-4"><strong>Conclusion: </strong></h4>
      <p className="text-secondary">
        Digital marketing and Traditional marketing have different strengths and
        weaknesses. Digital marketing is more targeted and measurable, while
        traditional marketing can reach a larger audience. Ultimately, the best
        type of marketing for a business will depend on its specific goals and
        target audience.
      </p>
      </div>
    </Container>
  );
};

export default MarketingComparison;
