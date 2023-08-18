import { useState } from 'react'

import RECAPTCHA from './Recaptcha'

function Contact(props) {

   if (props.data) {
      var name = props.data.name;
      var street = props.data.address.street;
      var city = props.data.address.city;
      var state = props.data.address.state;
      var zip = props.data.address.zip;
      var phone = props.data.phone;
      var email = props.data.email;
      var message = props.data.contactmessage;
   }

   const [emailName, setEmailName] = useState('')
   const [emailAddress, setEmailAddress] = useState('')
   const [subject, setSubject] = useState('')
   const [messagez, setMessage] = useState('')
   const [captchaSet, SetCaptchaSet] = useState(false)

   const submitMessage = (e) => {
      e.preventDefault()


      if (emailName !== '' || emailAddress !== '' || messagez !== '') {



         if (captchaSet) {
            fetch(`/api/emails/contact-form`, {
               method: "POST",
               headers: {
                  "Content-Type": "application/json"
               },
               body: JSON.stringify({
                  emailName,
                  emailAddress,
                  subject,
                  messagez
               })
            })
               .then(res => res.json())
               .then(json => {
                  if (json.status) {
                     document.getElementById('message-warning').style.display = 'none'
                     document.getElementById('message-success').style.display = 'block'
                     setEmailName('')
                     setEmailAddress('')
                     setSubject('')
                     setMessage('')
                     location.reload()
                  }
               })
               .catch(err => {
                  document.getElementById('message-success').style.display = 'none'
                  document.getElementById('message-warning').style.display = 'block'
               })
         } else {

         }

      }

   }

   const setTheCaptcha = () => {
      SetCaptchaSet(true)
   }

   return <section id="contact">

      <div className="row section-head">

         <div className="two columns header-col">

            <h1><span>Get In Touch.</span></h1>

         </div>

         <div className="ten columns">

            <p className="lead">{message}</p>

         </div>

      </div>

      <div className="row">
         <div className="eight columns">

            <form>
               <fieldset>

                  <div>
                     <label htmlFor="contactName">Name <span className="required">*</span></label>
                     <input value={emailName} type="text" size="35" id="contactName" name="contactName" onChange={(e) => setEmailName(e.target.value)} />
                  </div>

                  <div>
                     <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                     <input value={emailAddress} type="text" size="35" id="contactEmail" name="contactEmail" onChange={(e) => setEmailAddress(e.target.value)} />
                  </div>

                  <div>
                     <label htmlFor="contactSubject">Subject</label>
                     <input value={subject} type="text" size="35" id="contactSubject" name="contactSubject" onChange={(e) => setSubject(e.target.value)} />
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea value={messagez} onChange={(e) => setMessage(e.target.value)} cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <div className={'form_group_recaptcha'}>
                        <RECAPTCHA setTheCaptcha={setTheCaptcha} />

                     </div>
                     <button onClick={(e) => submitMessage(e)} className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
               </fieldset>
            </form>

            <div id="message-warning">There was an error sending your message. Please try again. </div>

            <div id="message-success">
               <i className="fa fa-check"></i>Your message was sent, thank you!<br />
            </div>

         </div>

         <aside className="four columns footer-widgets">
            <div className="widget widget_contact">

               <h4>Contact</h4>
               <p className="address">
                  {name}<br />
                  {city}, {state} {zip}<br />
                  {email}
                  {/* <span>{phone}</span> */}
               </p>
            </div>

            {/* <div className="widget widget_tweets">
             <h4 className="widget-title">Latest Tweets</h4>
             <ul id="twitter">
                <li>
                   <span>
                      This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                      Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                   <a href="#">http://t.co/CGIrdxIlI3</a>
                   </span>
                   <b><a href="#">2 Days Ago</a></b>
                </li>
                <li>
                   <span>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                   <a href="#">http://t.co/CGIrdxIlI3</a>
                   </span>
                   <b><a href="#">3 Days Ago</a></b>
                </li>
             </ul>
          </div> */}
         </aside>
      </div>
   </section>
}

export default Contact
