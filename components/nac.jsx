import upper from "./../images/Background.png"
import logo from "./../images/logo.webp"
import "./nac.css"
import refer from "./../images/Group 22035.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import phoot from "./../images/Anniversary (7) 1.png"
import pes1 from "./../images/Anniversary (8) 1.png"
import pes2 from "./../images/Anniversary (8) 4.png"
import Referpage from "./rferepaefge";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";
// https://developers.google.com/oauthplay
function Nav(){
    const [modal , setmodal] = useState(false)
    const [yourName, setYourName] = useState("");
    const [yourEmail, setYourEmail] = useState("");
    const [friendName, setFriendName] = useState("");
    const [friendEmail, setFriendEmail] = useState("");
    const [message, setMessage] = useState("");
    console.log(yourName , yourEmail , friendEmail , friendName)
    useEffect(()=>{
        function keysd(e) {
            if (e.keyCode == 27){
               setmodal(false)
            }
        }
       window.addEventListener("keydown" , keysd)
    //    window.addEventListener("click" , function (){
    //     setmodal(false)
    //    })
       return()=>{
        window.removeEventListener("keydown" , keysd)
       }
    } ,[])
    async function submitss(){
        if (!yourName && !yourEmail && !friendEmail && !friendName ){
            alert("every filed is required")
        }
        const data = await fetch("http://localhost:5100/get" ,{
            method:"POST",
            headers:{
            "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:yourName,
                email:yourEmail,
                dostemail:friendEmail,
                dostname:friendName

            })
        })
        setmodal(!modal)

    }
    function closemodal(){
        setmodal(!modal)
    }
    return(
        <>
        {modal && <div className="modal-overlay">
            <div className="modal-content container mt-4">
                <div className="close">
            <h2 className="text-center">Refer a Friend</h2>
            <h2><button className="btn btn-primary" onClick={closemodal} >Back Button</button></h2>
            </div>
            {/* <form onSubmit={handleSubmit} className="p-4 border rounded shadow"> */}
                {/* Your Name */}
                <div className="mb-3">
                    <label className="form-label">Your Name:</label>
                    <input  type="text" className="form-control" value={yourName} onChange={(e) => setYourName(e.target.value)} required />
                </div>

                {/* Your Email */}
                <div className="mb-3">
                    <label className="form-label">Your Email:</label>
                    <input type="email" className="form-control" value={yourEmail} onChange={(e) => setYourEmail(e.target.value)} required />
                </div>

                {/* Friend's Name */}
                <div className="mb-3">
                    <label className="form-label">Friend's Name:</label>
                    <input type="text" className="form-control" value={friendName} onChange={(e) => setFriendName(e.target.value)} required />
                </div>

                {/* Friend's Email */}
                <div className="mb-3">
                    <label className="form-label">Friend's Email:</label>
                    <input type="email" className="form-control" value={friendEmail} onChange={(e) => setFriendEmail(e.target.value)} required />
                </div>

                {/* Submit Button */}
                <button type="submit" onClick={submitss} className="btn btn-primary w-100">Send Referral</button>
            {/* </form> */}

            {/* Status Message */}
            {message && <p className="mt-3 text-center text-success">{message}</p>}
        </div>
            </div>}
        <div className="body">
<div className="upper">
<img src={upper} alt="" />
</div>
<div className="navbar">
    <div className="left">
<img src={logo} alt="" />
{/* <label for="courses" class="form-label">Select a Course</label> */}
        <select className="custom-select"  id="courses" name="Courses">
            <option value="" disabled selected>Choose a course</option>
            <option value="web-development">Web Development</option>
            <option value="data-science">Data Science</option>
            <option value="cyber-security">Cyber Security</option>
            <option value="ai-ml">AI & ML</option>
        </select>
        </div>
        <div className="right">
        <span>Home</span>
        <span>About us</span>
        <span>Resources</span>
        <button className="btn btn-success">Login</button>
        <button className="btn btn-danger">Try for Free</button>
        </div>
</div>
<div className="newnav">
    <div className="ne1">
    <span onClick={(e)=>{setmodal(!modal)}}>Refer</span>
    <span>Benefit</span>
    <span>FAQ</span>
    <span>Support</span>
    </div>
</div>
<div className="jumbo">
<div className="jumbotron">
<img src={pes2} alt="" />
<div className="butt">
    <div className="img2"><img src={refer} alt="" /></div>
    <button className="btn btn-primary" onClick={(e)=>{setmodal(!modal)}}>Refer Now</button>
    </div>
    <div className="huu">
  <div className="img1"> <img src={phoot} alt="" /></div> 
<div className="pes"> <img src={pes1} alt="" /></div> 
  </div>
</div>
</div>
<Referpage/>
</div>

        </>
    )
}
export default Nav
