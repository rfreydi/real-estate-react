import { cls } from '../../../utils/cls';

interface ShadowContainerProps {
  children: React.ReactNode,
  className?: string,
}

export const ShadowContainer = (
  {
    children,
    className = '',
  }: ShadowContainerProps
) => {
  const style = cls([ className, 'shadow-sm' ]);

  return (
    <div className={style}>
      {children}
    </div>
  );
};
