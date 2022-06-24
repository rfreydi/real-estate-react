interface TextProps {
  textStyle?: 'base' | 'h1' | 'h2',
  children: React.ReactNode,
}

const txtStyle = {
  base: 'text-base',
  h1: 'text-3xl',
  h2: 'text-2xl',
};

export const Text = (
  {
    textStyle = 'base',
    children,
  }: TextProps
) => {
  const cls = [ txtStyle[textStyle], 'text-gray-900' ].join(' ');

  return (
    <span className={cls}>
      {children}
    </span>
  );
};
