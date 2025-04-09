import React from 'react';
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const ImageComponent = (props: ImageProps) => {
  return <img {...props} />;
};

export default ImageComponent;
