import styles from "./contact.module.scss";

export default function Contact() {

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formdata = new FormData(event.currentTarget);
      const subject = formdata.get("subject") as string;
      const material = formdata.get("message") as string;
      location.assign(`mailto:apreswilson@gmail.com?subject=${subject}&body=${material}`);
      event.currentTarget.reset();
   }

   return (
      <main className={styles.contact_main}>
         <form className={styles.form} onSubmit={handleSubmit}>
            <h1>Email Me</h1>
            <input type="text" name="subject" placeholder="Subject"></input>
            <textarea placeholder="Message" name="message"></textarea>
            <button type="submit">Submit</button>
         </form>
         <h1>Social Media</h1>
         <p>You may feel free to also contact me via my social media in the connect section in the footer.</p>
      </main>
   )
}