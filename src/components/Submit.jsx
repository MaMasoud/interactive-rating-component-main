import React from 'react'
import star from "../assets/images/icon-star.svg"
import Box from './Box'
import Rating from './Rating';


const list = [1, 2, 3, 4, 5];

export default function Submit({rating, setRating, setSubmitted}) {
    function handleRating(value) {
        setRating(value);
      }
    
      function handleSubmit() {
        if (rating === 0) {
          alert("Please select a rating before submitting.");
          return;
        }
        setSubmitted(true);
      }
    return (
        <Box>
            <div className="star">
                <img src={star} alt="Star" />
            </div>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className="rating-list">
                {list.map((value, index) => <Rating key={index} handleRating={handleRating} value={value} isActive={rating === value} />)}
            </div>
            <button className="submit" onClick={handleSubmit}>Submit</button>
        </Box>
    )
}
