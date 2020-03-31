import React from 'react';
import styles from './styles.css';

const TaskItem = props => {
    if(props.task.column === "todo")
        return (
                <li className="list-group-item tItem">
                    <div className="card-body" id = {props.task.column}>
                        <h5 className="card-title">{props.task.title} </h5>
                        <p className="card-text">ID: {props.task.id}</p>
                        <p className="card-text">Type: {props.task.type}</p>
                    </div>
                <button type="button"
                        onClick={() => props.markDone(props.task)}
                        className="btn btn-primary" style={{ float: 'right' }}>
                        Done
                </button>

                </li>
        )
    else if(props.task.column === "in-progress")
        return (
            <li className="list-group-item tItem">
                <div className="card-body" id = {props.task.column}>
                    <h5 className="card-title">{props.task.title} </h5>
                    <p className="card-text">ID: {props.task.id}</p>
                    <p className="card-text">Type: {props.task.type}</p>
                </div>
                <p> Send Back </p>
                <p> Start Review </p>
            </li>
        );
    else if(props.task.column === "review")
        return (
            <li className="list-group-item tItem">
                <div className="card-body" id = {props.task.column}>
                    <h5 className="card-title">{props.task.title} </h5>
                    <p className="card-text">ID: {props.task.id}</p>
                    <p className="card-text">Type: {props.task.type}</p>
                </div>
                <a> Send Back </a>
                <a> Done </a>
            </li>
        );
    else
        return(
            <li className="list-group-item tItem">
                <div className="card-body" id = {props.task.column}>
                    <h5 className="card-title">{props.task.title} </h5>
                    <p className="card-text">ID: {props.task.id}</p>
                    <p className="card-text">Type: {props.task.type}</p>
                </div>
                <span>Send Back</span>
            </li>
        )


};

export default TaskItem;