import { Counter } from 'components/Counter';
import { useAppSelector } from 'hooks/reduxHooks';
import style from './style.module.scss';

const App = () => {
  const counters = useAppSelector(state => state.counters.counters);
  const sorted = [...counters].sort((a, b) => a.order - b.order);
  
  return (
    <div className={style.wrapper}>
      <div className={style.counterList}>
        {sorted.map(counter => (
          <Counter key={counter.id} counter={counter} />
        ))}
      </div>
    </div>
  );
};

export { App };