import { useState } from 'react';
import style from './style.module.scss';

type Props = {
  children: string;
  onChangeFinish?: (newValue: string) => void;
  className?: string;
  spanProps?: { [key: string]: any; };
  inputProps?: { [key: string]: any; };
};

const ChangableTitle: React.FC<Props> = (props) => {
  const { children, onChangeFinish, className, spanProps, inputProps } = props;

  const [value, setValue] = useState(children);
  const [changing, setChanging] = useState(false);
  
  const handleConfirm = () => {
    setChanging(false);
    if (onChangeFinish) onChangeFinish(value);
  };
  
  if (changing) return (
    <input
      {...inputProps}
      className={`${style.changableTitle} ${className}`}
      autoFocus
      onFocus={e => e.target.select()}

      value={value}
      onChange={e => setValue(e.target.value)}
      onBlur={handleConfirm}
      onKeyDown={e => e.key === 'Enter' && handleConfirm()}
    />
  );
  
  return (
    <span
      {...spanProps}
      className={`${style.changableTitle} ${className}`}
      onClick={() => setChanging(true)}
    >
      {value}
    </span>
  );
};

export { ChangableTitle };