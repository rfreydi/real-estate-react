import './button.css';

interface ButtonProps {
  primary?: boolean,
  type?: 'primary' | 'secondary' | 'transparent'
  size?: 'small' | 'medium' | 'large',
  children: React.ReactNode,
  onClick?: () => void,
}

const buttonTypeStyle = {
  primary: 'storybook-button storybook-button--primary',
  secondary: 'storybook-button storybook-button--secondary',
  transparent: ''
};

export const Button = (
  {
    type = 'primary',
    size = 'medium',
    children,
    ...props
  }: ButtonProps
) => {
  const cls = [ buttonTypeStyle[type], `storybook-button--${size}`].join(' ');

  return (
    <button type="button" className={cls} {...props}>
      {children}
    </button>
  );
};
