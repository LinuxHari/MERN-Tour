type Props = {
  title: string;
  children: React.ReactNode;
  showBorder?: boolean;
};

const TourSectionLayout = ({children, title, showBorder = true}: Props) => {
  return (
    <>
      <h2 className="text-30">{title}</h2>
      {children}
      {showBorder && <div className="line mt-60 mb-60" />}
    </>
  );
};

export default TourSectionLayout;
