import React,{useState} from 'react'

// console.log(useState('Enter text here2'))

export default function Textform(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase","success")
    }
    const handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase","success")
    }
    const handleCopyText = (e) => {
      let copyText = document.getElementById("myBox");
      copyText.select();
      copyText.setSelectionRange(0, text.length);
      navigator.clipboard.writeText(copyText.value);
      props.showAlert("Text copied","success")

    }
    const handleDeleteClick=()=>{
      let newText = "";
      setText(newText);
      props.showAlert("Text deleted","success")
  }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text,setText] = useState('');
    // setText("Suchi")
  return (
    <>
    <div style={{color: props.mode === 'dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'? 'grey':'white',color: props.mode === 'dark'? 'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleDeleteClick}>Delete Text</button>
    </div>
    <div className="container" style={{color: props.mode === 'dark'? 'white':'black'}}>
        <h1>Your Text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter some text to preview it'}</p>
    </div>
    </>
  )
}
