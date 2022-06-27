import React, { FC, useState, useCallback } from 'react';
import { FaRegImage } from 'react-icons/fa';

import { cls } from '../../utils/cls';


export type ImageType = {
  src?: string,
  alt?: string,
  className?: string,
  onError?: () => void
}

/**
 * A normal `<img>` but with a default fallback icon if the image cannot be loaded
 */
export const Image: FC<ImageType> = ({
  src,
  alt,
  className = '',
  onError,
  ...rest
}) => {
  const [errSrc, setErrSrc] = useState<string>();

  const error = useCallback(
    () => {
      setErrSrc(src);
    },
    [src]
  );

  return src && src !== errSrc
    ? (
      <img
        src={src}
        alt={alt}
        onError={onError ? onError : error}
        className={cls(['block object-center object-cover h-full w-full', className])}
        {...rest}
      />
    )
    : <div
      {...rest}
      className={cls(['bg-blue-50 flex items-center h-full w-full justify-center', className])}
    ><FaRegImage /></div>;
};


Image.displayName = 'Image';
