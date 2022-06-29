import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { cls } from '../../utils/cls';

interface IconProps {
  size?: 'small' | 'medium' | 'large',
  selected?: boolean,
  onIconClick?: () => void,
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
    onIconClick,
  }: IconProps
) => {
  const style = cls([ iconSize[size], onIconClick ? 'cursor-pointer' : '' ]);

  return (
    <span className={style} onClick={onIconClick}>
      {selected ? <AiFillStar /> : <AiOutlineStar />}
    </span>
  );
};
