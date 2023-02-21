import style from './style.module.scss';

const colors = {
  red: '#E9011D',
  green: '#4BB04E',
  purple: '#510FF0',
};

type ButtonColor = keyof typeof colors;

type Props = {
  children: string;
  color?: ButtonColor | string;
  className?: string;
  onClick?: React.MouseEventHandler;
  buttonProps?: { [key: string]: any };
};

const Button: React.FC<Props> = (props) => {
  const {
    children,
    color = 'purple',
    className,
    onClick,
    buttonProps,
  } = props;

  const backgroundColor =
    Object.keys(colors).includes(color) ? (colors as any)[color] : color;
  
  return (
    <button
      className={`${style.button} ${className}`}
      onClick={onClick}
      style={{ backgroundColor }}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export { Button };