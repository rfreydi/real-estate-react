import './button.css';

import { cls } from '../../utils/cls';

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
  const style = cls([ buttonTypeStyle[type], `storybook-button--${size}`]);

  return (
    <button type="button" className={style} {...props}>
      {children}
    </button>
  );
};
