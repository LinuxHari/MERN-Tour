type StarRatingProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
};

const StarRating = ({label, value, onChange}: StarRatingProps) => {
  return (
    <div className="reviewsGrid__item">
      {label}
      <div className="d-flex x-gap-5 pl-20">
        {Array.from({length: 5}).map((_, index) => (
          <button onClick={() => onChange(index + 1)} key={index} type="button">
            <i
              className={`icon-star text-10 ${index < value ? "text-yellow-2" : "text-lightgray"}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
