import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  selected?: boolean;
  transparent?: boolean;
}

function Button({ children, selected, transparent }: ButtonProps) {
  const selectedCss = transparent ? '' : selected
    ? 'bg-teal-900 text-white'
    : 'bg-stone-200';
  return (
    <button className={selectedCss +
      ' rounded-md px-3 py-0.5 space-x-1 flex items-center whitespace-nowrap'}>
      {children}
    </button>
  );
}

export default Button;
