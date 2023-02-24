import { useAppDispatch } from 'hooks/reduxHooks';
import {
  deleteCounter,
  incrementCounter,
  renameCounter,
} from 'store/countersSlice';
import { Counter as CounterType } from 'types';
import { Button } from './Button';
import { ChangableTitle } from './ChangableTitle';
import style from './style.module.scss';

type Props = {
  counter: CounterType;
};

const Counter: React.FC<Props> = ({ counter }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => dispatch(deleteCounter(counter.id));

  const getIncrementHandler = (value: number) => () =>
    dispatch(incrementCounter({ id: counter.id, value }));

  const handleRename = (title: string) => 
    dispatch(renameCounter({ id: counter.id, title }));
  
  return (
    <div className={style.counter}>
      <div className={style.top}>
        <ChangableTitle onChangeFinish={handleRename}>
          {counter.title}
        </ChangableTitle>

        <Button
          onClick={handleDelete}
          className={style.deleteButton}
        >
          Delete
        </Button>
      </div>

      <div className={style.bottom}>
        <span className={style.count}>{counter.count}</span>

        <div className={style.buttons}>
          <Button onClick={getIncrementHandler(1)} color='green'>+</Button>
          <Button onClick={getIncrementHandler(-1)} color='red'>&#8722;</Button>
        </div>
      </div>
    </div>
  );
};

export { Counter };