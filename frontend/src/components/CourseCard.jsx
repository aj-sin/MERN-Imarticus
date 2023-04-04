import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseCard = ({name,image_url,enrollment,free}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${image_url}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.

            <p>Enrollment: {enrollment}</p>
            <p>Fee: {free?"free":"Paid"}</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default CourseCard
