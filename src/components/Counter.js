import React from 'react';
import useCounter from '../hooks/counter';

const Counter = props => {
  const state = useCounter(0);

  return (
    <div className='wrapper d-flex justify-content-center align-items-center'>
      <div className='counter border border-secondary rounded d-flex flex-column'>
        <div className='d-flex justify-content-center align-items-center counter-display text-secondary bg-light'>
          <div className='display-1'>{state.value}</div>
        </div>
        <div className='d-flex flex-row counter-panels'>
          <button
            type='button'
            className='btn btn-danger w-100'
            onClick={state.decrement}>
            <i className='fas fa-minus' />
          </button>
          <button
            type='button'
            className='btn btn-info w-100'
            onClick={state.reset}>
            <i className='fas fa-sync-alt' />
          </button>
          <button
            type='button'
            className='btn btn-success w-100'
            onClick={state.increment}>
            <i className='fas fa-plus' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
