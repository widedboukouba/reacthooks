import React from 'react'
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import Button from 'react-bootstrap/Button';
const MovieCard = ({movie}) => {
    console.log(movie)
  return (
    <div className='kk'>
      
      <Card style={{ width: '18rem', margin: '10px'}}>
      <Card.Img variant="top" src={movie.posterurl} className="inform"/>
      <Card.Body style={{backgroundColor:''}}>
        <Card.Title className='title'>{movie.name}</Card.Title>
        <Card.Text>
         {movie.description}
        </Card.Text>
      </Card.Body>
      
      <Card.Body style={{backgroundColor:'rgb(19, 14, 24)'}}>
        <Button variant="outline-info">Watch Trailer</Button>
       <div>
      <ReactStars  count={5} size={24} activeColor="#06bbcc" edit={false} value={movie.rating}/>
      </div>,
      </Card.Body>
    </Card>    
    </div>

  );
}

export default MovieCard