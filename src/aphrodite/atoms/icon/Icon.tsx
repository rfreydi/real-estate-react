import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface IconProps {
  size?: 'small' | 'medium' | 'large',
  selected?: boolean,
}

const iconSize = {
  small: 'text-sm',
  medium: 'text-base',
  large: 'text-xl',
};

export const Icon = (
  {
    selected = false,
    size = 'medium',
  }: IconProps
) => {
  return (
    <span className={iconSize[size]}>
      {selected ? <AiFillStar /> : <AiOutlineStar />}
    </span>
  );
};
