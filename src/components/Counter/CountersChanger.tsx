import { useAppDispatch } from 'hooks/reduxHooks';
import { addCounter, deleteLastCounter } from 'store/countersSlice';
import { Button } from './Button';
import style from './style.module.scss';

const CountersChanger = () => {
  const dispatch = useAppDispatch();
  
  const handleAdd = () => dispatch(addCounter());

  const handleDelete = () => dispatch(deleteLastCounter());
  
  return (
    <div className={style.countersChanger}>
      <Button onClick={handleAdd} color='green'>+</Button>
      <Button onClick={handleDelete} color='red'>&#8722;</Button>
    </div>
  );
};

export { CountersChanger };