import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // const [decoration, setDecoration] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
      props.showAlert("uppercase has been activated", "success");
    
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
      props.showAlert("lowercase has been activated", "success");

  };
  
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
      props.showAlert("speak alert activated", "success");

  };
  const handelCopyClick = () => {
    navigator.clipboard.writeText(text);
      props.showAlert("copied to clipboard", "success");

  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
      props.showAlert("Text has been cleared", "success");

  };
  const handleRevClick = () => {
    let newText = text.split(" ").reverse().join(" ");
    setText(newText);
    props.showAlert("text has been reversed", "success");

  };
  
  
  return (
    <>
      <div className="container">
        <h1 className="text-warning fw-bolder">{props.heading}</h1>
        <div className="my-3">
          <textarea
            name=""
            className="form-control border-warning bg-info fs-4 text-danger"
            value={text}
            id="myBox"
            onChange={handleOnChange}
            cols="25"
            rows="7"
          ></textarea>
        </div>
        <button
          className="btn btn-warning fw-bolder mb-3 text-white rounded-pill"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-warning fw-bolder mb-3 text-white rounded-pill mx-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning fw-bolder mb-3 text-white rounded-pill mx-2"
        >
          Speak
        </button>
        <button
          className="btn btn-warning fw-bolder mb-3 text-white rounded-pill mx-2"
          onClick={handelCopyClick}
        >
          Copy text
        </button>
        <button
          className="btn btn-warning fw-bolder mb-3 text-white rounded-pill mx-2"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          className="btn btn-warning fw-bolder mb-3 text-white rounded-pill mx-2"
          onClick={handleRevClick}
        >
          Reverse words
        </button>
       
      </div>
      <div className="container">
        <h1 className="text-warning fw-bolder">Text Summary</h1>
        <p className="text-info fw-bolder">
          {text.split(" ").length}Words and {text.length} characters
        </p>
        <p className="text-info fw-bolder">
          {0.08 * text.split(" ").length}Minutes Read
        </p>
        <h2 className="text-warning fw-bolder text-decoration-underline ">
          Preview
        </h2>
        <p className="text-info fw-bolder">{text}</p>
      </div>
    </>
  );
}







// const handleAlternatingClick = () =>{
//       let newText = Text.split(" ").map(function(word){
//         if(word.toUpperCase() == word){
//           return word.toLowerCase();
//         }else{
//           return word.toUpperCase();
//         }
//       }).join(" ");
//       setText(newText);










// Total 2 functions.

// //remove all the symbols
// const handletextExtract =()=>{
//         const regex = /[0-9/A-Z/a-z/ /]/g;

//         const letters = text.match(regex);
//         const res1 = letters.join('');
//         setText(res1)
//         };


// //to extract only the numbers in the text:
// const handleNumExtract =()=>{
//         const regex = /[0-9/ /]/g;

//         const digits = text.match(regex);
//         const res = digits.join('');
//        setText(res)
//         };




// Babitha kumari
// 5 months ago
// Thankyou for the amazing course!
// Function to reverse text:

//   const handleReverse = (event) => {
//     /* Convert string to array*/
//     let strArr = text.split("");
//     /* Reverse array*/
//     strArr = strArr.reverse();
//     /* Convert array to string*/
//     let newText = strArr.join("");
//     setText(newText);
//   };

