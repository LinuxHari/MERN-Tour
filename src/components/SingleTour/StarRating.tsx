type StarRatingProps = {
  label: string;
  value: number;
  onChange: (value: number) => void
};

const StarRating = ({ label, value, onChange }: StarRatingProps) => {
  return (
    <div className="reviewsGrid__item">
      {label}
      <div className="d-flex x-gap-5 pl-20">
        {Array.from({ length: 5 }).map(() => (
          <i className="icon-star text-10 text-yellow-2"></i>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
