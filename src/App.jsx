import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementBy } from './store/slices/counter/counterSlice';

function App() {
  const { counter } = useSelector((state) => state.counterStore);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h4>count is {counter}</h4>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(incrementBy(2));
        }}
      >
        Increment by 2
      </button>
    </div>
  );
}

export default App;
