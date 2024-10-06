import React, { useState } from 'react';

const Question = ({ 
  id, 
  question, 
  options, 
  handleAnswer, 
  goToNextQuestion, 
  goToPreviousQuestion, 
  disablePrevious, 
  isLastQuestion, 
  finishQuiz 
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;

    if (event.target.checked) {
      setSelectedOptions([...selectedOptions, selectedOption]);
    } else {
      setSelectedOptions(
        selectedOptions.filter((option) => option !== selectedOption)
      );
    }
  };

  // Submit selected options when navigating to the next question or finishing the quiz
  const submitAnswer = () => {
    handleAnswer(selectedOptions);
  };

  return (
    <div className="question-card">
      <h2>{id}. {question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          </div>
        ))}
      </div>

      <div className="navigation-buttons">
        <button onClick={goToPreviousQuestion} disabled={disablePrevious}>
          Previous
        </button>

        {isLastQuestion ? (
          <button onClick={() => { submitAnswer(); finishQuiz(); }}>
            Finish
          </button>
        ) : (
          <button onClick={() => { submitAnswer(); goToNextQuestion(); }}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;
