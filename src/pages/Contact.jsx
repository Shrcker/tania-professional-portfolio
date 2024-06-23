// Stand-in for the "Contact" page.
import { useId } from 'react';

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    console.log(formData);
  }

  const textAreaId = useId();

  return (
    <div>
      <h1>Contact Me</h1>
      <p>
        Howdy! If you wish to contact me, just leave your name, return email,
        and message in the input fields below. I&apos;ll be sure to message you as
        soon as I am able.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">Your Name</label><br />
        <input name="nameInput" type="text" required /><br />

        <label htmlFor="emailInput">Your Email</label><br />
        <input name="emailInput" type="email" required /><br />

        <label htmlFor={textAreaId}>Your Message</label><br />
        <textarea
          id={textAreaId}
          name="messageInput"
          rows={4}
          cols={40}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;
