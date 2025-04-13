import React from 'react';
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

const ImageComponent = (props: ImageProps) => {
  return <img {...props} alt={props.alt} />;
};

export default ImageComponent;
