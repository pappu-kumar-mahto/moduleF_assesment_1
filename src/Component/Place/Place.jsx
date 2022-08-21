import React from "react";
import "./Place.css";
import { Row, Col, Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import PlaceData from "../../assets/placeData.json";
const Place = () => {
  // console.log(PlaceData.result);
  return (
    <div className="place">
      <div className="heading">
        <h1>Place</h1>
      </div>
      <Row>
        { PlaceData.result.map((singlePlace, index) => (
            <Col md={4} key={index} className="single-news">
              <Card className="placeCard">
                <Card.Img
                  variant="top"
                  src={
                    singlePlace.image
                      ? singlePlace.image
                      : "https://klizos.com/quirk-up-your-404-error-page-with-wit-and-humor/"
                  }
                  alt="single-news"
                />
                <Card.Body>
                  <Card.Title>
                    {singlePlace.title && singlePlace.title.length > 100
                      ? `${singlePlace.title.slice(0, 100)}...`
                      : singlePlace.title}
                  </Card.Title>
                  <Card.Text>
                  {singlePlace.description && singlePlace.description.length > 180
                      ? `${singlePlace.description.slice(0, 180)}...`
                      : singlePlace.description}
                  </Card.Text>
                  <Link className='btn btn-dark' to={`place/${index}`}>Read More</Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      
    </div>
  );
};

export default Place;
