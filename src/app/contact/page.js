import React from "react";
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm"


const Contact=()=>{
    return(
        <>
        <div className={styles.container}> 
        <h1>Contact Us</h1>
        
        <ContactCard />

        <section className={styles.contact_section}> 
        <h2>We'd love to hear <span> from you</span></h2> 
        <ContactForm />

        </section>

        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.4890253939334!2d88.41047167517411!3d22.5608061795001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02743203255595%3A0x9c37b30c00660fab!2sJadavpur%20University%20Salt%20Lake%20Campus!5e0!3m2!1sen!2sin!4v1688033431715!5m2!1sen!2sin"
         width={100} height={450} style={{border:0}} allowfullscreen="" loading="lazy"
         className={styles.mapping} referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </>
    );
};

export default Contact;