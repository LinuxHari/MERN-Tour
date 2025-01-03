import ContactInfo from "./ContactInfo";
import LinkList from "./LinkList";
import Newsletter from "./NewsLetter";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const companyLinks = [
    {text: "About Us", href: "#"},
    {text: "Tourz Reviews", href: "#"},
    {text: "Contact Us", href: "#"},
    {text: "Travel Guides", href: "#"},
    {text: "Data Policy", href: "#"},
    {text: "Cookie Policy", href: "#"},
    {text: "Legal", href: "#"},
    {text: "Sitemap", href: "#"},
  ];

  const supportLinks = [
    {text: "Get in Touch", href: "#"},
    {text: "Help center", href: "#"},
    {text: "Live chat", href: "#"},
    {text: "How it works", href: "#"},
  ];

  return (
    <footer className="footer -type-1">
      <div className="footer__main">
        <div className="footer__bg">
          <img src="/img/footer/1/bg.svg" alt="Footer background" />
        </div>

        <div className="container">
          <div className="footer__info">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="row y-gap-20 items-center">
                  <div className="col-auto">
                    <i className="icon-headphone text-50" />
                  </div>
                  <div className="col-auto">
                    <div className="text-20 fw-500">
                      Speak to our expert at
                      <span className="text-accent-1 mx-2">1-800-453-6744</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <SocialLinks />
              </div>
            </div>
          </div>

          <div className="footer__content">
            <div className="row y-gap-40 justify-between">
              <ContactInfo />
              <LinkList title="Company" links={companyLinks} />
              <LinkList title="Support" links={supportLinks} />
              <Newsletter />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <div className="col-auto">
            <div>© Copyright Viatours 2024. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
