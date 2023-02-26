import counterReducer, {
  addCounter,
  CountersState,
  deleteCounter,
  deleteLastCounter,
  incrementCounter,
  renameCounter
} from 'store/countersSlice';
import { Counter } from 'types';

const mockCounter: Counter = {
  id: '1',
  title: 'Counter title',
  count: 0,
};

describe('CounterSlice test', () => {
  it('should add new counter with addCounter action', () => {
    let state: CountersState = { counters: [] };
    const action = { type: addCounter.type };

    state = counterReducer(state, action);

    expect(state.counters).toHaveLength(1);
    expect(state.counters[0].title).toEqual('New counter 1');
    expect(state.counters[0].count).toEqual(0);
  });

  it('should delete counters with deleteCounter action', () => {
    const counters: Counter[] = [
      { ...mockCounter, id: '1' },
      { ...mockCounter, id: '2' },
      { ...mockCounter, id: '3' },
      { ...mockCounter, id: '4' },
      { ...mockCounter, id: '5' },
    ];
    let state: CountersState = { counters };
    const getAction = (id: string) => 
      ({ type: deleteCounter.type, payload: id });

    state = counterReducer(state, getAction('2'));

    expect(state.counters).toHaveLength(4);
    expect(state.counters).toEqual(
      counters.filter(({id}) => id !== '2'));

    state = counterReducer(state, getAction('some_Invalid_Id'));

    expect(state.counters).toHaveLength(4);
    expect(state.counters).toEqual(
      counters.filter(({ id }) => id !== '2'));
  });

  it('should delete last counter with deleteLastCounter action', () => {
    const counters: Counter[] = [
      { ...mockCounter, id: '1' },
      { ...mockCounter, id: '2' },
      { ...mockCounter, id: '3' },
      { ...mockCounter, id: '4' },
      { ...mockCounter, id: '5' },
    ];
    let state: CountersState = { counters };
    const action = { type: deleteLastCounter.type };

    state = counterReducer(state, action);

    expect(state.counters).toHaveLength(4);
    expect(state.counters).toEqual(counters.slice(0, -1));

    state = counterReducer(state, action);

    expect(state.counters).toHaveLength(3);
    expect(state.counters).toEqual(counters.slice(0, -2));
  });

  it('should change count with incrementCounter action', () => {
    const counters: Counter[] = [
      { ...mockCounter, id: '111' },
      { ...mockCounter, id: '222' },
    ];
    let state: CountersState = { counters };
    const getAction = (id: string, value: number) =>
      ({ type: incrementCounter.type, payload: { id, value } });

    state = counterReducer(state, getAction('111', 1));
    expect(state.counters).toHaveLength(2);
    expect(state.counters[0].count).toEqual(1);
    expect(state.counters[1].count).toEqual(0);

    state = counterReducer(state, getAction('111', 7));
    expect(state.counters).toHaveLength(2);
    expect(state.counters[0].count).toEqual(8);
    expect(state.counters[1].count).toEqual(0);

    state = counterReducer(state, getAction('111', -17));
    expect(state.counters).toHaveLength(2);
    expect(state.counters[0].count).toEqual(-9);
    expect(state.counters[1].count).toEqual(0);

    state = counterReducer(state, getAction('222', 3));
    expect(state.counters).toHaveLength(2);
    expect(state.counters[0].count).toEqual(-9);
    expect(state.counters[1].count).toEqual(3);
  });

  it('should rename counter with renameCounter action', () => {
    const counters: Counter[] = [
      { ...mockCounter, id: 'id1' },
      { ...mockCounter, id: 'id2' },
    ];
    let state: CountersState = { counters };
    const getAction = (id: string, title: string) =>
      ({ type: renameCounter.type, payload: { id, title } });

    state = counterReducer(state, getAction('id1', 'New Title'));
    expect(state.counters).toHaveLength(2);
    expect(state.counters[0].title).toEqual('New Title');
    expect(state.counters[1].title).toEqual('Counter title');

    state = counterReducer(state, getAction('id2', 'Another'));
    expect(state.counters).toHaveLength(2);
    expect(state.counters[0].title).toEqual('New Title');
    expect(state.counters[1].title).toEqual('Another');

    state = counterReducer(state, getAction('id2', 'UwU title'));
    expect(state.counters).toHaveLength(2);
    expect(state.counters[0].title).toEqual('New Title');
    expect(state.counters[1].title).toEqual('UwU title');
  });
});

export {};