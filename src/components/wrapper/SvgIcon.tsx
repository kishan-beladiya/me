// components/SvgIcon.tsx
import React from "react";

interface SvgIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  color?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ src, color, style, ...props }) => {
  return (
    <img
      src={src}
      style={{
        filter: color
          ? `invert(1) sepia(1) saturate(5) hue-rotate(0deg)`
          : undefined,
        ...style,
      }}
      {...props}
    />
  );
};

export default SvgIcon;
