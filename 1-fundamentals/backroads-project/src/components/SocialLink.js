const SocialLink = ({ itemsClass, href, icon }) => {
    return (
      <li>
        <a href={href} target="_blank" rel="noreferrer" className={itemsClass}>
          <i className={icon}> </i>
        </a>
      </li>
    );
}

export default SocialLink;