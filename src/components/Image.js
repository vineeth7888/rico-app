import React from "react";

const ImageComponent = ({
  src,
  alt,
  sizes = {
    small: "",
    medium: "",
    large: "",
  },
  className = "",
  lazy = true,
  onClick = () => {},
}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      onClick();
    }
  };

  return (
    <picture
      onClick={onClick}
      onKeyDown={onClick ? handleKeyDown : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <source
        srcSet={`${src}${sizes.small}`}
        media="(max-width: 768px)"
        type="image/webp"
      />
      <source
        srcSet={`${src}${sizes.medium}`}
        media="(max-width: 1024px)"
        type="image/webp"
      />
      <img
        src={`${src}${sizes.large}`}
        alt={alt}
        className={className}
        loading={lazy ? "lazy" : "eager"}
      />
    </picture>
  );
};

export default ImageComponent;
