import React from 'react'
import './Testimonial.css'
//import hero from '../../assets/truck1.jpeg'

const Testimonial = () => {
    return (
        <div>
            <div className="hero-wrapper">
                <img 
                src="https://images.unsplash.com/photo-1541855127-2e944b899d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                 alt="" />
                   <div className='contacts-title'>
                      <h1>Testimonials</h1>
                   </div>
            </div>
            <div className="testimony">
                <div style={{textAlign:"center",color:'#1261A0'}}><h3>What our Previous Clients Say about Us</h3></div>
                <p>"Choosing Leafe Designer Homes was the best decision that we
                     ever made and we have absolutely no hesitation in recommending 
                     them to our family and friends (or anyone that listens). We love
                      the home that Ryan and his team built for us and are so incredibly 
                      proud of the end result.</p>
                      <p>From our very first contact with Ryan and throughout the whole build
                           process with his team nothing was ever too much trouble and we always 
                           felt well respected. Ryan is incredibly easy
                           to talk to and was always wanting to ensure that we were consulted with
                            every decision that had to be made.</p>
                            <p>It truly was a pleasant experience from start to finish, and not once did
                                 we feel like just another client, so much so that we have told Ryan that
                                  we are happy for him to bring any future clients through our home to see 
                                  first hand the exceptional build quality.
Should we ever decide to leave this beautiful home and build again, without any hesitation, Leafe Designer 
Homes is the only company that we would ever build with..."</p>
<strong style={{color:'#1261A0'}}>Jarrod and Belinda Blaker</strong>
            </div>
            <div className="testimony">
                <p>"Leafe Designer Homes was incredibly supportive throughout the daunting process of building our first home. From the moment, we meet Ryan at our newly purchased lot, we were excited by the professionalism and the easy to understand advice Ryan was providing guiding us through the process of building our first house in Australia

</p>
                      <p>Ryan and his team made us part of the construction process from the beginning to the end with Ryan personally looking after our needs and providing us with a great customer service focused on our satisfaction.</p>
                            <p>Building with Leafe Designer Homes was an absolute pleasure and nothing was ever too hard for them. The end result is exactly what we pictured and we couldn’t be happier!</p>
<p>THank you!..."</p>
<strong style={{color:'#1261A0'}}>Klaus and Patricia Pollmeier</strong>
            </div>
            <div className="testimony">
                <p>"Whilst building with Leafe Designer Homes, nothing was too much trouble. You would always get a same day response to any queries or changes to the home. Ryan Leafe was extremely well organised in every way including areas such variations and kept track of this in such an orderly fashion, with no confusion, no hidden costs or unwanted surprises at the end. Being able to phone the builder direct for any changes, queries or updates was reassuring, as we did change our my mind regularly with many things. but it was never too much trouble nor a hassle.</p>
                      <p>Ryan was always on hand if I needed advice on any matters. The friendly service and the “nothing is too difficult” attitude made every experience with Leafe Designer Homes a pleasure. My family and I love the house you built for us in Carindale..."</p>
                            
<strong style={{color:'#1261A0'}}>JDamien and Jackie Kippin</strong>
            </div>
            <hr />
            <div className="testimony">
                <p>Ready to have a chat? Give me a call on 07 05000089 or  07 86151760 to discuss the home you want to build.</p>
            </div>
        </div>
    )
}

export default Testimonial
