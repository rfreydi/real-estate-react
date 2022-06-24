interface ShadowContainerProps {
  children: React.ReactNode,
  className?: string,
}

export const ShadowContainer = (
  {
    children,
    className,
  }: ShadowContainerProps
) => {
  const cls = [ className, 'shadow-sm' ].join(' ');

  return (
    <div className={cls}>
      {children}
    </div>
  );
};
