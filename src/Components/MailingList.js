import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import './MailingList.css'

const MailingList = () =>{
    const form = useRef();
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_n6iloe7', 'template_33d1ffq', form.current, 'j2ccC8Ou1uuqSfEEM')
          .then((result) => {
              console.log(result.text);
              alert('Successfully submitted');
              window.location.reload(false)
          }, (error) => {
              console.log(error.text);
              alert('Failed to send message. Try again')
          });
          form.current.reset();
    }

    return(
        <>
        <div className='mailing_list bg-gradient-to-b from-red-600 to-rose-800 mt-2'>
            <h2 id="mailing_list_heading">Subscribe to my mailing list to be notified when I add new recipes!</h2>
            <form ref={form} onSubmit={sendEmail}>
                <input type="email" id="email" name="email" placeholder="Email" required />
                <input type="submit" id="button" name="submit" value="Join!" />
            </form>
        </div>
            </>
    )
}

    export default MailingList
    