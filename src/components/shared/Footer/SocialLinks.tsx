const SocialLinks = () => {
    const socialIcons = [
      { href: "#", icon: "icon-facebook" },
      { href: "#", icon: "icon-twitter" },
      { href: "#", icon: "icon-instagram" },
      { href: "#", icon: "icon-linkedin" },
    ];
  
    return (
      <div className="footerSocials">
        <div className="footerSocials__title">Follow Us</div>
        <div className="footerSocials__icons">
          {socialIcons.map(({href, icon}, index) => (
            <a key={index} href={href} className={icon}></a>
          ))}
        </div>
      </div>
    );
  };

  export default SocialLinks