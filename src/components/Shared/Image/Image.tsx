import {useState, useEffect, useRef} from "react";

const Image = ({
  src,
  alt,
  className = "object-fit-cover",
  ...otherImgProps
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {threshold: 0.1},
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img ref={imgRef} src={isVisible ? src : ""} alt={alt} className={className} {...otherImgProps} loading="lazy" />
  );
};

export default Image;
