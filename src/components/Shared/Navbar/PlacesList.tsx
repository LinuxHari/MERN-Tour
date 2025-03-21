type PlacesListProps = {
  data: {name: string; url: string}[];
  title: string;
};

const PlacesList = ({data, title}: PlacesListProps) => {
  return (
    <div className="tabsMenu-list">
      <div className="tabsMenu-list__title">{title}</div>
      <div className="tabsMenu-list__content">
        {data.map((place, index) => (
          <div key={index} className="tabsMenu-list__item">
            <a href={place.url}>{place.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesList;
