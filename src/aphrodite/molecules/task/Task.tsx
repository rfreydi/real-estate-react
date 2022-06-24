import { ShadowContainer } from '../../atoms/container/shadow-container/ShadowContainer';
import { Text } from '../../atoms/text/Text';
import { IconButton } from '../../molecules/icon-button/IconButton';
import { Icon } from '../../atoms/icon/Icon';

export interface TaskProps {
  id: number,
  label: string,
  className?: string,
  selected?: boolean,
  onStarClick: () => void,
}

export const Task = (
  {
    className,
    label,
    selected,
    onStarClick,
  }: TaskProps
) => {
  const cls = [ className, 'p-2 px-4 flex items-center bg-white' ].join(' ');

  return (
    <ShadowContainer className={cls}>
      <div className="flex-1">
        <Text>{label}</Text>
      </div>
      <IconButton onClick={onStarClick} isActive={selected} />
    </ShadowContainer>
  );
};
