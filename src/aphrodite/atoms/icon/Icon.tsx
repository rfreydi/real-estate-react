import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { cls } from '../../utils/cls';

interface IconProps {
  testId: string,
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
    testId,
    selected = false,
    size = 'medium',
    onIconClick,
  }: IconProps
) => {
  const style = cls([ iconSize[size], onIconClick ? 'cursor-pointer' : '', selected ? 'selected' : '' ]);

  return (
    <span className={style} data-testid={testId} onClick={onIconClick}>
      {selected ? <AiFillStar /> : <AiOutlineStar />}
    </span>
  );
};
