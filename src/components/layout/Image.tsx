"use client";

interface ImageProps {
  size?: number;
  src: string;
  alt: string;
  className?: string;
}

const Image = ({ src, alt, size, className = "" }: ImageProps) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = "none";
  };

  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`${className}`}
      onError={handleError}
    />
  );
};

export default Image;
