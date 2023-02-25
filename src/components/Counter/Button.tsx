import style from './style.module.scss';

const colors = {
  red: '#E9011D',
  green: '#4BB04E',
  purple: '#510FF0',
};

type ButtonColor = keyof typeof colors;

type Props = {
  children: React.ReactNode | string;
  color?: ButtonColor;
  className?: string;
  onClick?: React.MouseEventHandler;
  buttonProps?: React.ComponentProps<'button'>;
};

const Button: React.FC<Props> = (props) => {
  const {
    children,
    color = 'purple',
    className = '',
    onClick,
    buttonProps,
  } = props;
  
  return (
    <button
      {...buttonProps}
      className={`${style.button} ${className}`}
      onClick={onClick}
      style={{ backgroundColor: colors[color] }}
    >
      {children}
    </button>
  );
};

export { Button };