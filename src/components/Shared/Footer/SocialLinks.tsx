const SocialLinks = () => {
  const socialIcons = [
    {href: "/", name: "Facebook", icon: "icon-facebook"},
    {href: "/", name: "Twitter", icon: "icon-twitter"},
    {href: "/", name: "Instagram", icon: "icon-instagram"},
    {href: "/", name: "LinkedIn", icon: "icon-linkedin"},
  ];

  return (
    <div className="footerSocials">
      <div className="footerSocials__title">Follow Us</div>
      <div className="footerSocials__icons">
        {socialIcons.map(({href, icon, name}, index) => (
          <a key={index} href={href} className={icon}>
            {name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
