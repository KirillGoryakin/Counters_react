import { ChangeEvent, useState } from 'react';
import style from './style.module.scss';

type Props = {
  children: string;
  onChangeFinish?: (newValue: string) => void;
  className?: string;
  spanProps?: React.ComponentProps<'span'>;
  inputProps?: React.ComponentProps<'input'>;
};

const ChangableTitle: React.FC<Props> = (props) => {
  const { children, onChangeFinish, className, spanProps, inputProps } = props;

  const [value, setValue] = useState(children);
  const [changing, setChanging] = useState(false);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 40) 
      setValue(e.target.value);
  };
  
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
      size={value.length}

      value={value}
      onChange={handleChange}
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