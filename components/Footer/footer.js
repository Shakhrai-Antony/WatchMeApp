import s from './footer.module.scss'

const Footer = () => {
    const today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    return (
        <div className={s.footer_section}>
            <p>&copy; Copyright {date} Shakhray Anton </p>
        </div>
    )
}


export default Footer