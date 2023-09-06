import React ,{useState} from 'react'

export default function TextForm(props) {
 
    const handleUpClick = ()=>{
      if(text== '')
        props.showAlert("Enter the text First","warning")
      else{
        // console.log("UpperCase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Upper case","success")
      }
    }
    const handelOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleLoClick = ()=>{
      if(text== '')
        props.showAlert("Enter the text First","warning")
      else{
      // console.log("UpperCase was clicked"+text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("converted to lower case","success")
      }
  }
  const handlClClick = () =>{
    if(text== '')
        props.showAlert("Enter the text First","warning")
    else{
      let newText  = ' ';
      setText(newText);
      props.showAlert("text is cleared","success")
    }
  }
  const handlSClick = () =>{
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert("Extra space is removed","success")
  }
    const [text,setText] = useState('Entre the Text');
    //setText("enter new text"); this how you can change the 
  return (
    <>
    <div className='container'>
        <h1 style={{color:props.mode === 'light'?'black':'white'}}>{props.heading}</h1>
     
        <div className="mb-3">
            <label for="examleFormControlTextarea1" className="form-label" style={{color:props.mode === 'light'?'black':'white'}}>Example textarea</label>
             <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"  value ={text} onChange={handelOnChange} style={{backgroundColor:props.mode === 'light'?'white':'black',color:props.mode === 'light'?'black':'white'}}></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to upper Case</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lower Case</button>
        <button className='btn btn-primary mx-2' onClick={handlClClick}>clear Text</button>
        <button className='btn btn-primary mx-2' onClick={handlSClick}>clear extra Space</button>
    </div>
    <div className='container my-3' style={{color:props.mode === 'light'?'black':'white'}}>
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} Words and {text.length} charecters</p>
      <p>{0.008*text.split(" ").length} minnutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
