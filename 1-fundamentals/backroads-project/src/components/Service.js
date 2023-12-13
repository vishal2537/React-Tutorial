const Service = ({ icon, title, text }) => {
    return (
        <article className="service">
            <span className="services-icon">
                <i className={icon}></i>
            </span>
            <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-title">{text}</p>
            </div>
        </article>
    )
}

export default Service