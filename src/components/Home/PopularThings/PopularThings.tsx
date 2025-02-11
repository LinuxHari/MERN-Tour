import Image from "../../Shared/Image/Image";

const PopularThings = () => {
  const features = [
    {title: "Cruises", image: "img/features/1/1.png"},
    {title: "Beach Tours", image: "img/features/1/2.png"},
    {title: "City Tours", image: "img/features/1/3.png"},
    {title: "Museum Tour", image: "img/features/1/4.png"},
    {title: "Food", image: "img/features/1/5.png"},
    {title: "Hiking", image: "img/features/1/6.png"},
  ];

  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="col-auto">
          <h2 className="text-30 md:text-24">Popular things to do</h2>
        </div>
        <div className="grid -type-1 pt-40 sm:pt-20">
          {features.map((feature, index) => (
            <a
              key={index}
              href="/"
              className="featureCard -type-1 -hover-1 overflow-hidden rounded-12 px-30 py-30"
            >
              <div className="featureCard__image">
                <Image src={feature.image} alt={feature.title} />
              </div>
              <div className="featureCard__content">
                <h4 className="text-white">{feature.title}</h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularThings;
