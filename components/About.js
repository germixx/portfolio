import Image from 'next/image'
import ProfileImage from './ProfileImage'
import Download from './Download'

function About(props) {

   if (props.data) {
      var name = props.data.name;
      var profilepic = "/" + props.data.image;
      var bio = props.data.bio;
      var street = props.data.address.street;
      var city = props.data.address.city;
      var state = props.data.address.state;
      var zip = props.data.address.zip;
      var phone = props.data.phone;
      var email = props.data.email;
   }

   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic" src="/Jeremy-Goolsby.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
               <h2>About</h2>
               <p>{bio}</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact</h2>
                     <p className="address">
                        <span>{name}</span><br />
                        <span>
                           {city}, {state} {zip}
                        </span><br />
                        {/* <span>{phone}</span><br /> */}
                        <span>{email}</span>
                     </p>
                  </div>
                  <div className="columns download">

                     <Download />

                  </div>
               </div>
            </div>
         </div>

      </section>
   )
}

export default About
