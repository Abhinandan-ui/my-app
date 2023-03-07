import React, {useState} from 'react'

export default function TextForm(props) {
   
  const handleUpClick =() => {
    //console.log("UpperCase was clicked" + text);
    let newText =text.toUpperCase();
    setText(newText)
 
  }
 
  const handleOnChange =(event) =>{
    setText(event.target.value)
  }
 
  const  handleloClick =() =>{
    let lowercase=text.toLowerCase();
    setText(lowercase)
   
  }

  const handleClearClick =() =>{
    setText("");
    
  }


  const speak =() =>{
  let msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
  const toogle = document.getElementById('toogle')
  if(toogle.textContent ==="Speak"){
    toogle.innerHTML ="Stop"
  }

  else{
    toogle.innerHTML ="Speak"
    if(toogle.innerHTMl = "Speak"){
      window.speechSynthesis.cancel()

      }
    }
  }
  
  const handleExtraSpaces =() =>{
    let newText =text.split(/[ ]+/)
    setText(newText.join(" "))
   
  } 
  
  const[text , setText] = useState('');
  
  return (
    <>
    <div class="container" style ={{color: props.mode === 'dark' ? 'white':'black'}} >
   <h1>{props.heading}  </h1>
<div class="mb-3">
  
  <textarea class="form-control" value ={text} onChange={handleOnChange} style ={{backgroundColor: props.mode === 'dark' ? 'rgb(3 13 20)':'white', color:props.mode === 'dark' ? 'white':'black'}}id="myBox" rows="8"></textarea>
</div>
<button class="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
<button class="btn btn-primary mx-2 my-2" onClick={handleloClick}>Convert to lowerCase</button>
<button class="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
<button class="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Space </button>
<button class="btn btn-primary mx-2 my-2" onClick={speak} id="toogle">Speak</button>
    </div>
    <div class="container my-3 "style ={{color: props.mode === 'dark' ? 'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and  {text.length} characters</p>
      <p> {0.008 *text.split(" ").length} Minutes read </p>
    
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Something in the above textbox to preview here!"}</p>
    </div>
    </>
  )
}
