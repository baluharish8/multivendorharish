import "./ratingcomponent.css"
import React, { useEffect, useState } from 'react';

export const StarRating = ({ initialRating, totalStars, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    onRatingChange(selectedRating);
  };
useEffect(()=>{
  setRating(initialRating)
},[initialRating])
  return (
    <>
       <span className="star-rating">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index + 1)}
          className={index < rating ? 'filled' : ''}
        >
      <i className="fa-solid fa-star fa-2xs ps-1"></i>
        </span>
      ))}
    </span>
    </>
 
  );
};

// Example usage:
// const App = () => {
//   const [userRating, setUserRating] = useState(0);

//   const handleRatingChange = (newRating) => {
//     setUserRating(newRating);
//   };

//   return (
//     <div>
//       <h1>Product Rating</h1>
//       <StarRating initialRating={userRating} totalStars={5} onRatingChange={handleRatingChange} />
//       <p>User Rating: {userRating}</p>
//     </div>
//   );
// };

// export default App;
