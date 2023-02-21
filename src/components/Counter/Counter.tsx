import { Counter as CounterType } from 'types';
import { Button } from './Button';
import style from './style.module.scss';

type Props = {
  counter: CounterType;
};

const Counter: React.FC<Props> = ({ counter }) => {
  return (
    <div className={style.counter}>
      <div className={style.top}>
        <span className={style.title}>{counter.title}</span>
        <Button>Delete</Button>
      </div>
      <div className={style.bottom}>
        <span className={style.count}>{counter.count}</span>
        <div className={style.buttons}>
          <Button>+</Button>
          <Button>-</Button>
        </div>
      </div>
    </div>
  );
};

export { Counter };