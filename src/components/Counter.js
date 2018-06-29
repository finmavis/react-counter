import React from 'react';

const Counter = (props) => (
    <div className="wrapper d-flex justify-content-center align-items-center">
        <div className="clicker border border-secondary rounded d-flex flex-column">
            <div className="d-flex justify-content-center align-items-center clicker-display text-secondary bg-light">
                <div className="display-1">{props.counter}</div>
            </div>
            <div className="d-flex flex-row clicker-panels">
                <button type="button" className="btn btn-success w-100" onClick={props.increment}><i className="fas fa-plus"></i></button>
                <button type="button" className="btn btn-info w-100" onClick={props.reset}><i className="fas fa-sync-alt"></i></button>
                <button type="button" className="btn btn-danger w-100" onClick={props.decrement}><i className="fas fa-minus"></i></button>
            </div>
        </div>
    </div>
);

export default Counter;