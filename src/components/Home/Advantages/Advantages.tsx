 const Advantages = () => {

    const advantagesData = [
        {
          icon: "img/icons/1/ticket.svg",
          title: "Ultimate flexibility",
          text: "You're in control, with free cancellation and payment options to satisfy any plan or budget."
        },
        {
          icon: "img/icons/1/hot-air-balloon.svg",
          title: "Memorable experiences",
          text: "Browse and book tours and activities so incredible, you'll want to tell your friends."
        },
        {
          icon: "img/icons/1/diamond.svg",
          title: "Quality at our core",
          text: "High quality standards. Millions of reviews. A tourz company."
        },
        {
          icon: "img/icons/1/medal.svg",
          title: "Award-winning support",
          text: "New price? New plan? No problem. We're here to help, 24/7."
        }
      ];

    return (
      <section className="layout-pt-xl">
        <div data-anim-wrap className="container animated">
          <div data-anim-child="slide-up" className="row is-in-view">
            <div className="col-auto">
              <h2 className="text-30 md:text-24">Why choose Tourz</h2>
            </div>
          </div>
  
          <div
            data-anim-child="slide-up delay-2"
            className="row justify-content-center justify-content-md-start md:x-gap-20 pt-40 sm:pt-20 mobile-css-slider -w-280 is-in-view"
          >
            {advantagesData.map(({icon, title, text}, index) => (
              <div key={index} className="col-lg-3 col-sm-6">
                <div className="featureIcon -type-1 pr-40 md:pr-0">
                  <div className="featureIcon__icon">
                    <img src={icon} alt="icon" />
                  </div>
  
                  <h3 className="featureIcon__title text-18 fw-500 mt-30">
                    {title}
                  </h3>
                  <p className="featureIcon__text mt-10">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Advantages;
  