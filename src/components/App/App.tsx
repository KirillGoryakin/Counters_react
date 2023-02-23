import { Counter } from 'components/Counter';
import { CountersChanger } from 'components/Counter/CountersChanger';
import { useAppSelector } from 'hooks/reduxHooks';
import style from './style.module.scss';

const App = () => {
  const counters = useAppSelector(state => state.counters.counters);
  
  return (
    <div className={style.wrapper}>
      <CountersChanger />
      
      <div className={style.counterList}>
        {counters.map(counter => (
          <Counter key={counter.id} counter={counter} />
        ))}
      </div>

      <CountersChanger />
    </div>
  );
};

export { App };