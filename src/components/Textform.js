import React, { useState } from 'react'



export default function Textform(props) {

    const [text, settext] = useState("");
    const [result, setresult] = useState("");
    // const [fword, findword] = useState("");
    // const [rword, replaceword] = useState("");

    const handleUpclick = () => {
        console.log("Upper case was clicked");
        setresult(text.toUpperCase());
        props.showalert("Converted to Upper Case", "success");
    }
    const handleLoclick = () => {
        console.log("Lower case was clicked");
        setresult(text.toLowerCase());
        props.showalert("Converted to Lower Case", "success");
    }
    const handleclearclick = () => {
        console.log("Clear Text was clicked");
        setresult("");
        props.showalert("Text Cleared", "success");
    }
    const handlecopyclick = () => {
        console.log("Copy Text was clicked");
        var hii = document.getElementById("myBox");
        hii.select();
        navigator.clipboard.writeText(hii.value);
        props.showalert("Copied to Clipboard", "success");
    }
    const handlespacechange = () => {
        console.log("Remove Extra Spaces was clicked");
        let hel = text.split(/[ ]+/);
        setresult(hel.join(" "));
        props.showalert("Removed extra spaces", "success");
    }
    const handleonChange = (event) => {
        console.log("on change");

        settext(event.target.value);
    }
    // const handlefindchange = (event) => {
    //     console.log("Find was clicked");

    //     settext(event.target.value);
    // }
    // const handlereplacechange = (event) => {
    //     console.log("Replace was clicked");

    //     settext(event.target.value);
    // }
    

    return (
        <>
            <div className="container bg-body-secondary rounded" style={{
                color: props.modes === 'info-subtle' ? 'black' : 'grey',
                backgroundColor: props.modes === 'info-subtle' ? 'white' : '#242424f3',
                paddingBottom: '15px'
            }}>

                <label htmlFor="myBox" className="form-label"><h2>Enter your text here!</h2></label>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleonChange} style={{
                        backgroundColor: props.modes === 'info-subtle' ? 'white' : '#242424f3',
                        color: props.modes === 'info-subtle' ? 'black' : 'white'
                    }} id="myBox" rows="8"></textarea>

                </div>

                <button className="btn btn-info" onClick={handleUpclick}>Convert to UpperCase</button>
                <button className="btn btn-info mx-1" onClick={handleLoclick}>Convert to LowerCase</button>
                <button className="btn btn-info mx-1" onClick={handleclearclick}>Clear Text</button>
                <button className="btn btn-info mx-1" onClick={handlecopyclick}>Copy Text</button>
                {/* <button className="btn btn-info mx-2" onClick={handlefindchange}>Find</button>
                <button className="btn btn-info mx-2" onClick={handlereplacechange}>Replace</button> */}
                <button className="btn btn-info mx-1" onClick={handlespacechange}>Remove Extra Spaces</button>
            </div>

            <div className="container bg-body-secondary rounded my-3" style={{
                color: props.modes === 'info-subtle' ? 'black' : 'grey',
                backgroundColor: props.modes === 'info-subtle' ? 'white' : '#242424f3',
                paddingBottom: '10px'
            }}>

                <label htmlFor="myBox2" className="form-label"><h2>Your result here!</h2></label>
                <div className="mb-3">

                    <textarea className="form-control" value={result} onChange={handleonChange} style={{
                        backgroundColor: props.modes === 'info-subtle' ? 'white' : '#242424f3',
                        color: props.modes === 'info-subtle' ? 'black' : 'white'
                    }} id="myBox2" rows="8"></textarea>
                </div>
            </div>
            <div className="container my-3 bg-body-secondary rounded" style={{
                color: props.modes === 'info-subtle' ? 'black' : 'grey'
            }}>
                <h3>Your text summary is here:</h3>

                <p>{text.length > 0 ? text.split(" ").length : 0} words, {text.length} charaters, {0.008 * text.split(" ").length} minutes taken to read</p>

                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter your text above"}</p>
            </div>

        </>
    )
}
