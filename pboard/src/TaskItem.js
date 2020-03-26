import React from 'react';

import styles from './styles.css';

const TaskItem = props => {
    return (
        <li className="list-group-item tItem">
            <div className="card-body" id = {props.task.column}>
                <h5 className="card-title">{props.task.title} </h5>
                <p className="card-text">ID: {props.task.id}</p>
                <p className="card-text">Type: {props.task.type}</p>
                <button type="button"
                        onClick={() => props.markDone(props.task)}
                        className="btn btn-primary" style={{ float: 'right' }}>
                    Done
                </button>
            </div>
        </li>


    )
};

export default TaskItem;