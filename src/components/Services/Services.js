import React from 'react'
import './Services.css'
import hero from '../../assets/ex4.jpg'
import hero2 from '../../assets/brochure-download-im5.png'
import {Button,CardDeck,Card} from 'react-bootstrap'


const Services = () => {
  

    return (
        <div>
          <div className="hero-wrapper">
                <img src={hero} alt="" />
                   <div className='contacts-title'>
                      <h1>Services We Offer</h1>
                   </div>
            </div>



       <div className="midd">
         
         <h3 style={{color:'#1261A0'}}>Construction of Multi-level Residential buildings, office and mixed use Building</h3>
       </div>

       <div className="gener">

       <div className="proj">
       <CardDeck>
               <Card className="home-card-a" style={{padding:'25px 0'}}>
               <Card.Body style={{padding:'0 10%'}}>
                     <h4 style={{color:'#1261A0'}}>Multi-level Buildings</h4>
                     <div style={{margin:'25px 0'}}>
                     <p style={{fontSize:'14px'}}>
                       As time elapse technology change and modernization invade each part of the world. The dream of every house owner is to have
                        a house that stands unique across all the ages. Elegance and quality is what we want our houses to be actually.
                     </p>
                     <p style={{fontSize:'14px'}}>
                       At Shaft Co. Limited we ensure we give the best. We build world class multi-level home and office buildings to suite the demands 
                       of our clients. The interior decoration designer is one of his own level with varied skill and vast experience,
                       we assure you of all but the best.
                     </p>
                     </div>
                     
               </Card.Body>
               </Card>
               <Card className="home-card-b">
                   <Card.Img variant="top" 
                   src="https://images.unsplash.com/photo-1495202337139-e865ed70fcd4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fGJ1aWxkaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                   className="proje"/>
               </Card>
       </CardDeck>
      </div>

      <div className="midd">
         <h3 style={{color:'#1261A0'}}>Repairs and Maintenance</h3>
      </div>

      <div className="proj">
       <CardDeck>
                <Card className="home-card-a">
                   <Card.Img variant="top" 
                   src="https://images.unsplash.com/photo-1597343578056-2edf20848490?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80" 
                   className="proje"/>
                </Card>
                <Card className="home-card-b" >
                <Card.Body style={{padding:'0 10%',paddingBottom:'10px'}}>
                     <h4 style={{color:'#1261A0'}}>Repair and Maintenance</h4>
                     <div style={{margin:'25px 0'}}>
                      <p style={{fontSize:'16px'}}>Is your building wearing out or the roads in your
                       area developing potholes? "A stitch in time saves nine..." Call us to give a stitch. 
                        At Shaft Co. Limited, we guarantee you best results. We repair warn out buildings giving them new faces and we do road maintenance 
                        at the best cost in the market.
                      </p>
                     </div>
               </Card.Body>
                </Card>
       </CardDeck>
      </div>
       
      <div className="midd">
         <h3 style={{color:'#1261A0'}}>Exavator Works</h3>
      </div>

      <div className="proj">
       <CardDeck>
               <Card className="home-card-a" style={{padding:'35px 0'}}>
               <Card.Body style={{padding:'0 10%'}}>
                     <h4 style={{color:'#1261A0'}}>Exavator Works</h4>
                     <div style={{margin:'25px 0'}}>
                     <p style={{fontSize:'14px'}}>
                     Excavators are an essential piece of heavy equipment for most
                      construction projects. Often referred to as diggers, excavators are
                       used for all kinds of jobs like material handling, landscaping, demolition,
                        mining projects, river dredging and construction.
                     </p>
                     <p style={{fontSize:'14px'}}>Shaft Co. LImited has good excavators with highly trained well experienced in the machine operations.
                       We offer the best services.
                     </p>
                     </div>
                     <Button variant="primary" style={{backgroundColor:'#1261A0'}}>View Company</Button>
               </Card.Body>
               </Card>
               <Card className="home-card-b">
                   <Card.Img variant="top" 
                   src="https://www.aggbusiness.com/sites/ropl-ab/files/137631.jpg" 
                   className="proje"/>
               </Card>
       </CardDeck>
      </div>

       </div>

       <div className="client-views">
         <h4 style={{color:'#1261A0'}}>What our clients are saying</h4>
         <p>
         Choosing Leafe Designer Homes was the best decision that we ever made and we have absolutely no hesitation in recommending them to our family and friends (or anyone that listens). We love the home that Ryan and his team built for us and are so incredibly proud of the end result.

From our very first contact with Ryan and throughout the whole build process with his team nothing was ever too much trouble and we always felt well respected. Ryan is incredibly easy to talk to and was always wanting to ensure that we were consulted with every decision that had to be made.

It truly was a pleasant experience from start to finish, and not once did we feel like just another client, so much so that we have told Ryan that we are happy for him to bring any future clients through our home to see first hand the exceptional build quality.
Should we ever decide to leave this beautiful home and build again, without any hesitation, Leafe Designer Homes is the only company that we would ever build with.
         </p>
       </div>

       <div className="midd">
         <h3 style={{color:'#1261A0'}}>Interior Design and Installation</h3>
      </div>

{/*projects*/}
       <div className="home-projects-body">
       <div className="prj">
            <CardDeck>
  <Card >
    <Card.Img variant="top" 
    src="https://images.unsplash.com/photo-1606765962791-c6bf51cedccf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
     className="proje" />
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
      Elsie Ridge Building
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" 
    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
     className="proje"/>
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
        Elsie Ridge Building
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" 
    src="https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" 
    className="proje"/>
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
      Elsie Ridge Building
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
            </div>

            <div className="midd">
         <h1 style={{color:'#1261A0'}}>Equipment Hire</h1>
         
       </div>

            <div className="prj">
            <CardDeck>
  <Card>
    <Card.Img variant="top" 
    src="https://fuso.co.ke/assets/images/deliveringprofit_tipper_mainvisual.jpg"
     className="proje"/>
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
        Grand Riverside BUilding 
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" 
    src="https://muchogu.files.wordpress.com/2015/01/tata-lpk2523.jpg"
     className="proje"/>
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
      Grand Riverside BUilding
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" 
    src="https://trucksforhirekenya.co.ke/wp-content/uploads/2020/08/Trucks-for-Hire-and-Logistics-Kenya-Limited-4-490x300.jpg"
     className="proje"/>
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
      Grand Riverside BUilding
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
            </div>
           
       </div>
  
       <div className="midd">
         <h3 style={{color:'#1261A0'}}>Site Preparation</h3>
      </div>

      <div className="proj">
       <CardDeck>
               <Card className="home-card-a" style={{padding:'35px 0'}}>
               <Card.Body style={{padding:'0 10%'}}>
                     <h4 style={{color:'#1261A0'}}>Site Preparation</h4>
                     <div style={{margin:'25px 0'}}>
                       <p style={{fontSize:'16px'}}>
                       Site preparation process is the first task that must be completed.  
                       Engineers need a clear and properly prepared site to. 
                        To start a new project in a site that is unfriendly to the project can
                         destroy plans, hinder building permits and damage the overall project.
                          It is a challenging activity that must be dealt with before any building 
                          project can begin in earnest.
                       </p>
                        <p style={{fontSize:'16px'}}>
                        With civil engineering projects, the site preparation can be demolition
                      (both above and below ground), soil clearing, soil testing, site plan designs, 
                      zoning restrictions, environmental concern and coordinating how everything on 
                      the project should run. Preparing your site properly to begin with means a much 
                     safer, more productive working environment, and a total project that is up to 
                     standard and in code.
                        </p>
                    
                     </div>
                    
               </Card.Body>
               </Card>
               <Card className="home-card-b">
                   <Card.Img variant="top" 
                   src="https://images.unsplash.com/photo-1574184420405-4c3058cbacc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                   className="proje"/>
               </Card>
       </CardDeck>
      </div>

      <div className="midd">
         <h3 style={{color:'#1261A0'}}>Dumping Services</h3>
      </div>

      <div className="prj">
            <CardDeck>
  <Card >
    <Card.Img variant="top" 
    src="https://images.unsplash.com/photo-1542948222-6712eb0bc791?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    
     className="proje" />
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
      Elsie Ridge Building
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" 
    src="https://images.unsplash.com/photo-1600795848739-5c58472a9552?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=916&q=80"
     className="proje"/>
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
        Elsie Ridge Building
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" 
    src="https://images.unsplash.com/photo-1532530571679-ef36fd7b16fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" 
    className="proje"/>
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
      Elsie Ridge Building
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
            </div>

            <div className="midd">
         <h1 style={{color:'#1261A0'}}>Building Materials Delivery</h1>
         
       </div>

       <div className="proj">
       <CardDeck>
               <Card className="home-card-a" style={{padding:'35px 0'}}>
               <Card.Body style={{padding:'0 10%'}}>
                     <h4 style={{color:'#1261A0'}}>Building Materials Delivery</h4>
                     <div style={{margin:'25px 0'}}>
                     Shaft Co. Limited has well serviced modern trucks that deliver construction materials all over the country.
                     We transport all construction materials like sand, gravel, timber, blocks ironsheets and many more.
                     </div>
               </Card.Body>
               </Card>
               <Card className="home-card-b">
                   <Card.Img variant="top" 
                   src="https://motionarray.imgix.net/preview-212872-vS14CH3Quc-high_0000.jpg" 
                   className="proje"/>
               </Card>
       </CardDeck>
      </div>


            <div className="midd">
         <h3 style={{color:'#1261A0'}}>Road Murramming and Butimen Standardizing Services</h3>
      </div>

      <div className="prj">
            <CardDeck>
  <Card >
    <Card.Img variant="top" 
    src="https://images.unsplash.com/photo-1575569410604-665038425ffa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
     className="proje" />
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
      Elsie Ridge Building
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" 
    src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvYWQlMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
     className="proje"/>
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
        Elsie Ridge Building
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" 
    src="https://images.unsplash.com/photo-1565204630921-bbafec59a229?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" 
    className="proje"/>
    <Card.Body>
      <Card.Text style={{color:'#1261A0'}}>
      Elsie Ridge Building
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
            </div>
       {/*end projects*/}

       <div className="home-cont-rem">
         <h4 style={{color:'#1261A0'}}>Have a question about the building process or want to chat about your new home? Call us today on 07 3488 0055.
        </h4>
       </div>

       <div className="home-bronchure">
         <div className="home-bronchure-overlay">
           <div className="home-bronchure-a">
             <div>
             <Card style={{backgroundColor:'transparent'}}>
    <Card.Img variant="top" src={hero2}  alt=""/>
    <div style={{padding:'4px 4%'}}>
      <h4 style={{textAlign:'center', color:'#1261A0'}}>Request A Brochure</h4>
      <p>
      Find out what makes us different, more about
      our process and how we can build your home
      that reflects your dream vision.
      </p>
    </div>
  </Card>
             </div>
              
           </div>
           <div className="home-bronchure-b">
             <div className="home-form">
           <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input id="first_name" type="text" className="validate"/>
          <label htmlFor="first_name">Your Name</label>
        </div>
      </div>

     
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label htmlFor="email">Your Email</label>
        </div>
      </div>

     
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="number" className="validate"/>
          <label htmlFor="password">Your Phone</label>
        </div>
      </div>
      
   
    <div className="row">
        <div className="input-field col s12">
          <input id="last_name" type="text" className="validate"/>
          <label htmlFor="last_name">City</label>
        </div>
      </div>
     
      <div className="row">
        <div className="input-field col s12">
          <input id="last_name" type="text" className="validate"/>
          <label htmlFor="last_name">Phyical Address</label>
        </div>
      </div>
      <a className="waves-effect waves-light btn" href="#k" style={{backgroundColor:'#1261A0'}}>Send</a>
    </form></div>
           </div>
         </div>
       </div>
      </div>
    )
}

export default Services
