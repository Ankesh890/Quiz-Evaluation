import React from 'react';

const Quiz = () => {
    const question = "what can you do with a book?";
    const option = [Draw,Listen,Read,Eat];

    return (        <div>
        <h2>Quiz Question</h2>
        <p>{question}</p>
        {options.map((option,index) => (
            <div key={index}>
                <input type="radio" id={option} name="Quiz" value={option}  />
                <label htmlFor={option}>{option}</label>
          </div>
           )) }
           <button type="submit">submit Answer</button>
           </div>
           )
            };

            export default Quiz;


























