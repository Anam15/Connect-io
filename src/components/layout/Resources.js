import React from "react";
import {Link } from "react-router-dom";
import Navbar from './Navbar';


class Resources extends React.Component {
  render() {
    return (
      <div>
          <Navbar/>
          <img style = {{width:"1300px", height:"300px", margin: "20px 100px"}}
                    src = "images/res.png"/>
        <div style = {{fontSize:'20px', fontFamily:"-moz-initial"}} >
        <div style = {{display:"flex", justifyContent:"space-around", width:"97%", margin: "30px"}}>
            <div style = {{width:"400px", height:"750px", borderRadius:"40px",background: "rgb(0,204,204) 100%"}}>
                <h3 style = {{padding:" 5px 30px"}}>Resume Review  Interview Prep</h3>
                <div style = {{padding:" 10px 40px"}}>
                <p>(1) Are you tired of getting rejected from jobs and internships over and over again becuase you don't know how to respond to a
                    behavioral question or articulate your throughts during a technical interview?</p>
                <p>(2) Are you overwhelemed by looking at thousands of resume and coverletter outlines online and not knowing which one you should follow?</p>
                <p>If you answered yes to any of the questions above, you should connect with one of our career coaches today</p>
                </div>
                <Link to="/TempResume"><button style = {{borderRadius:"40px",background: "rgb(0,150,200) 100%" , padding:" 10px 40px", marginLeft:"90px"}}
                >CLICK HERE</button>
                </Link>
            </div>            
            <div style = {{width:"400px", height:"750px", borderRadius:"40px",background: "rgb(0,150,200) 100%"}}>
                <h3 style = {{padding:" 5px 20px"}}>Networking Events</h3>
                <div style = {{padding:" 10px 40px"}}>
                <p>(1) Did you know that according to payscale.com, 85% of jobs are filled through networking?</p>
                <p>(2) Did you know that only 2 to 5 percent people who apply to jobs online, without a referral end up getting called in for an interview?</p>
                <p>If you answered no to any of the quetsions above, ad would like to learn more about how networking can significantly reduce the time you spent
                  looking for a job, or would like to network with employees from the our partner companies, please check out our 'Events' page. </p>
                </div>
                <Link to="/Events"><button style = {{borderRadius:"40px",background: "rgb(102,178,255) 100%", padding:" 10px 40px", marginLeft:"90px"}}
                >CLICK HERE</button>
                </Link>
            </div>
            <div style = {{width:"400px", height:"750px", borderRadius:" 40px",background: "rgb(102,178,255) 100%"}}>
            <h3 style = {{padding:" 10px 110px"}}>Job Board</h3>
                <div style = {{padding:" 10px 40px", wordSpacing: ".2px"}}>
                <p>(1) Are you tired of applying to hundreds of jobs per month and not even getting to a phone screen?</p>
                <p>(2) Are you tired of feeling overwhelmed by looking for opening on different job boards and websites?</p>
                <p>If you answered yes to any of the questions above, check out our Job Board, where you can find job openings at our partner companies. 
                  If your application materials are reviewed by one of our career coaches before they were submitted, a phone screening for a position you applied for via our webiste 
                  will be guaranteed. </p>
                </div>
                <Link to="/tempjobboard"><button style = {{borderRadius:"40px",background: "rgb(0,204,204) 100%", padding:" 10px 40px", marginLeft:"90px"}}
                >CLICK HERE</button>
                </Link>
            </div>
         </div>
         <div style = {{width:"100%", height:"270px",background: "rgb(0,150,200) 100%", display:"flex", justifyContent:"space-around"}}>
           <h2 style={{margin: "100px 70px"}}> Connect.io</h2>
           <div style={{margin: "35px 50px"}}>
           <h5> <b>Connect With Us</b></h5>
           <img style = {{width:"40px", height:"35px", marginRight:"10px"}}
                    src = "images/fb.png"/>
            <img style = {{width:"40px", height:"35px", marginRight:"10px"}}
                    src = "images/twitter.png"/>
            <img style = {{width:"40px", height:"35px", marginRight:"10px"}}
                    src = "images/insta.png"/>
            <img style = {{width:"40px", height:"35px", marginRight:"10px"}}
                    src = "images/youtube.png"/>
            <p style={{textAlign:"center"}}>Have questions for the team?</p> 
            <Link to="/tempjobboard"><button style = {{background: "rgb(102,178,255) 100%", marginLeft:"50px", padding:" 5px 20px"}}
                > <h6>CONTACT US</h6></button>
                </Link> 
            </div>
            <div style={{margin: "35px 50px"}}>
            <h5 style={{textAlign:"center"}}> <b>Support Us</b></h5>
            <Link to="/tempjobboard"><button style = {{background: "rgb(102,178,255) 100%", marginLeft:"50px",padding:" 5px 10px"}}
                > <h6>DONATE NOW</h6></button>
                </Link>
                <p style={{textAlign:"center"}}>Interested in learning more?</p>
                <Link to="/tempjobboard"><button style = {{background: "rgb(102,178,255) 100%", marginLeft:"50px",padding:" 5px 15px"}}
                > <h6>LEARN MORE</h6></button>
                </Link>
            </div>
           
           </div>
         </div>
      </div>
    );
  }
}

export default Resources;