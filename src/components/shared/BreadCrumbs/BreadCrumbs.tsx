const BreadCrumbs = () => {
  return (
    <div className="breadcrumbs">
      <span className="breadcrumbs__item">
        <a href="#">Home</a>
      </span>
      &nbsp;
      <span>&gt;</span>
      &nbsp;
      <span className="breadcrumbs__item">
        <a href="#">Tours</a>
      </span>
      &nbsp;
      <span>&gt;</span>
      &nbsp;
      <span className="breadcrumbs__item">
        <a href="#">Phuket</a>
      </span>
    </div>
  );
};

export default BreadCrumbs;
