import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Successpopup from '../component/Successpopup';
import sentencesData from '../sentences.json';

const Quiz = () => {
 const [inputValue, setInputValue] = useState('');
 const [matchedText, setMatchedText] = useState(null);
 const [checkpopup, setCheckpopup] = useState(false);
 const [explanation, setExplanation] = useState('');
 const [disabledBtn, setDisabledBtn] = useState(false);
 const [currentQuestionIndex, setCurrentQuestionIndex] = useState();
 
 const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
 const currentSentence = sentencesData[currentSentenceIndex];

 const totalArrayLength = sentencesData.length;
 const currentLength = currentSentenceIndex + 1;

  const handleInputChange = (e) => {
    const input = e.target.value;
    setInputValue(input);
    setCurrentQuestionIndex(currentSentence.id)
   // console.log(currentSentence?.id)
  };
  
  const handleMatchClick = () => {
    console.log(currentQuestionIndex)
    // const match = sentencesData.filter((item) => item.answer.toLowerCase() === inputValue.toLowerCase());
    const match = sentencesData.filter((item) => item.id === currentQuestionIndex )
    //console.log(match)
     
    if (match.length>0) {
        if(match[0]?.answer.toLowerCase() === inputValue.toLowerCase()){
          setMatchedText(match[0].answer);
          setInputValue('')
          setCheckpopup(true)
          setCurrentQuestionIndex()
        }
        else{
          setCheckpopup(false)
          setMatchedText(null);
          setInputValue('')
        }
        setCheckpopup(true)
      } else {
         
      }
    
  };
  const explanationBox =()=>{
    setExplanation(true)
    setCheckpopup(false)
  }
  const handleNext = () => {
    setCurrentSentenceIndex(currentSentenceIndex + 1);
    setInputValue('')
    setCheckpopup(false)
    const disabled= currentSentenceIndex === sentencesData.length - 2;
    console.log(disabled)
    if(disabled){
      setDisabledBtn(true)
    }
  };
 
    
  return (
    <div className="quiz-container">
      <div className="wrap-quiz">
        <div className="quiz-level-progress">
          <div className="flex">
            <Link className='close' to="/"></Link>
           <ul>
                <li>
                  <div style={{width: "35%"}}></div>
                  <span>5</span>
                  <span>7</span>
                  <span>10</span>
                </li>
            </ul>
            <div className="count-level">3</div>
          </div>
        </div>
        <div className="ques-head">
          <h1>Simple Present</h1>
          <strong>Word: Eat</strong>
        </div>
        <div className="question-block">
          <div className="flex">
            <span>{currentSentence.first}</span>
            <input type="text"
             className="ques-input"
             value={inputValue}
             onChange={handleInputChange}
            />
            <span>{currentSentence.last}</span>
          </div>
          <div>
        
      </div>
          <p>ಅವನು ತನ್ನ ಆಹಾರವನ್ನು ತಿನ್ನುತ್ತಾನೆ</p>
        </div>
      </div>
      <button disabled={inputValue=="" ? true:false} className="sm-btn" onClick={handleMatchClick}>Check</button>
      {checkpopup ? (
            <Successpopup questionLenght={totalArrayLength} curentLength={currentLength} matchedText={matchedText} explanationBox={explanationBox} handleNext={handleNext} disabledBtn={disabledBtn} />
           ) : (
            null
      )}
      <div className={explanation ? 'success-answer-popup explanation' : 'success-answer-popup'}>
           <div className="icon"></div>
			<div className="ques-ans-info">
               <strong>Simple Present Tense Thumb Rule: Word + {currentSentence.explanation}</strong>
			</div>
		 <div className="wrap-btn">
			<button className="btn">Next</button>
    	 </div>
	  </div>
    </div>
  );
};

export default Quiz;
