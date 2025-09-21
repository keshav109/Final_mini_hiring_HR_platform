import React from "react";
import type { CardProps } from "../../types";

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  padding = "md",
}) => {
  const baseStyles =
    "h-full bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-emerald-100 hover-card-effect";

  const paddingStyles = {
    sm: "p-5",
    md: "p-7",
    lg: "p-9",
  };

  const cardClassName = `${baseStyles} ${paddingStyles[padding]} ${className}`;

  return <div className={cardClassName}>{children}</div>;
};

export default Card;
