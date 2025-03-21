import React ,{useState}from 'react'



export default function Textform(props) {
    const[text,setText]=useState('');
    
    const handleUpClick=(event)=>
    {
      console.log("clicked on to uppercase");
      var newStr=text.toUpperCase();
      setText(newStr);

    }
    const clearText=()=>
    {
      setText("");
    }
    const handleLoClick=(event)=>
    {
      console.log("clicked on to uppercase");
      var newStr=text.toLowerCase();
      setText(newStr);

    }
    const handleOnChange=(event)=>
    {
      
      setText(event.target.value);
      
    }
    const selectText=()=>
    {
      let text=document.getElementById("myBox");
      text.select();
      // navigator.clipboard.writeText(text.value);
    }
    const copyText=()=>
    {
      let text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    
  return (
    <>
    <div>
      <div className="container">
        <h1 >{props.heading}</h1>
        <div  className="mb-3">
            <br />
            <textarea style={{width:'80em'}} name="" id="myBox" rows="9" value={text} onChange={handleOnChange} ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={selectText}>select Text</button>
        <button className="btn btn-primary mx-1" onClick={copyText}>copy Text</button>
      </div> 
    </div>
    <div className="container my-10">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length}  Characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
