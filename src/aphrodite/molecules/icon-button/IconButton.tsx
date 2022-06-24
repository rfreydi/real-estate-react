import { Button } from '../../atoms/button/Button';
import { Icon } from '../../atoms/icon/Icon';

interface IconButtonProps {
  isActive?: boolean,
  onClick: () => void,
}

export const IconButton = (
  {
    isActive,
    onClick,
  }: IconButtonProps
) => {
  return (
    <Button onClick={onClick} type="transparent">
      <Icon selected={isActive} />
    </Button>
  );
};
