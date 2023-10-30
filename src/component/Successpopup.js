import React from "react";

const Successpopup = ({ matchedText, explanationBox, handleNext, disabledBtn, questionLenght, curentLength }) => {

  return (
    <>
      {matchedText ? (
        <div className={matchedText ? "success-answer-popup right-ans" : "success-answer-popup"}>
          <div className="icon"></div>
          <p className="hide"><strong>{curentLength} / {questionLenght}</strong></p>
          {!disabledBtn ?
          <div className="ques-ans-info">
            <strong>Ans: I am currently watching a movie</strong>
          </div>:
           (<div className="ques-ans-info">
             <strong>Finished all questions</strong>
           </div>
          )}
          <div className="wrap-btn">
            <button className="btn" onClick={explanationBox}>
              Give explanation
            </button>
            <button disabled={disabledBtn ? 'disabled' : ''} className='btn green-btn' onClick={handleNext}>Next</button>
          </div>
        </div>
      ) : (
        <div className={matchedText ? "success-answer-popup" : "success-answer-popup wrong-answer"}>
          <div className="icon"></div>
          {!disabledBtn ?
          <div className="ques-ans-info">
            <strong>Ans: I am currently watching a movie</strong>
          </div>:
           (<div className="ques-ans-info">
             <strong>Finished all questions</strong>
           </div>
          )}
          <div className="wrap-btn">
            <button className="btn" onClick={explanationBox}>Give explanation</button>
            <button disabled={disabledBtn ? 'disabled' : ''} className="btn error-btn" onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Successpopup;
