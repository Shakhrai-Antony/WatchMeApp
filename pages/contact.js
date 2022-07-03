import Meta from "../components/meta/meta";
import s from './contact.module.scss'

const ContactUs = () => {
    return (
        <div className={s.contact_section}>
            <Meta title={'Contact US'}/>
            <button><a href="https://www.linkedin.com/in/anton-shakhrai/">Contact Me on LinkedIn</a></button>
        </div>
    )
}

export default ContactUs