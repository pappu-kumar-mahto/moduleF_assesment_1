import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import PlaceData from '../../assets/placeData.json'
import "./Place.css";
const SingleNews = () => {
    const { id } = useParams()
    let singlePlace = PlaceData.result[id]
    console.log(singlePlace)
  return (
    <Container>
      <Row>
        {singlePlace && (
                  <Col md={{span:'4', offset:'4'}} className="singlePlace">
              <Card className="singePlaceCard">
                <Card.Img
                  variant="top"
                  src={
                    singlePlace.image
                      ? singlePlace.image
                      : "https://klizos.com/quirk-up-your-404-error-page-with-wit-and-humor/"
                  }
                  alt="singlePlace"
                />
                <Card.Body>
                  <Card.Title>
                    {singlePlace.title && singlePlace.title.length > 100
                      ? `${singlePlace.title.slice(0, 100)}...`
                      : singlePlace.title}
                  </Card.Title>
                  <Card.Text>
                  {singlePlace.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
      </Row>
    </Container>
  );
};
export default SingleNews;