import { Button } from './Button';
import style from './style.module.scss';

const CountersChanger = () => {
  return (
    <div className={style.countersChanger}>
      <Button color='green'>+</Button>
      <Button color='red'>&#8722;</Button>
    </div>
  );
};

export { CountersChanger };