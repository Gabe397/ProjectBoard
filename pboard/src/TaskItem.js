import React from 'react';
import AddTask from './AddTask';
import styles from './styles.css';

const TaskItem = props => {
    if (props.task.column === "todo")
        return (
            <li className="list-group-item tItem">
                <div className="card-body" id={props.task.column}>
                    <h5 className="card-title">{props.task.title} </h5>
                    <p className="card-text">ID: {props.task.id}</p>
                    <p className="card-text">Type: {props.task.type}</p>
                </div>
                <button type="button"
                        onClick={() => props.moveProgress(props.task)}
                        className="btn btn-primary" style={{float: 'right'}}>
                    Move To Progress
                </button>

            </li>
        );
    else if (props.task.column === "in-progress")
        return (
            <li className="list-group-item tItem">
                <div className="card-body" id={props.task.column}>
                    <h5 className="card-title">{props.task.title} </h5>
                    <p className="card-text">ID: {props.task.id}</p>
                    <p className="card-text">Type: {props.task.type}</p>
                </div>

                <button type="button"
                        onClick={() => props.moveReview(props.task)}
                        className="btn btn-primary" style={{margin:'5px'} }>
                    Move To Review
                </button>

                <button type="button"
                        onClick={() => props.moveToDo(props.task)}
                        className="btn btn-primary" style={{margin:'5px'}}>
                    Move To ToDo
                </button>

            </li>
        );
    else if (props.task.column === "review")
        return (
            <li className="list-group-item tItem">
                <div className="card-body" id={props.task.column}>
                    <h5 className="card-title">{props.task.title} </h5>
                    <p className="card-text">ID: {props.task.id}</p>
                    <p className="card-text">Type: {props.task.type}</p>
                </div>
                <button type="button"
                        onClick={() => props.moveDone(props.task)}
                        className="btn btn-primary" style={{margin:'5px'} }>
                    Move To Done
                </button>

                <button type="button"
                        onClick={() => props.moveProgress(props.task)}
                        className="btn btn-primary" style={{margin:'5px'}}>
                    Move To Progress
                </button>
            </li>
        );
    else
        return (
            <li className="list-group-item tItem">
                <div className="card-body" id={props.task.column}>
                    <h5 className="card-title">{props.task.title} </h5>
                    <p className="card-text">ID: {props.task.id}</p>
                    <p className="card-text">Type: {props.task.type}</p>
                </div>
                <button type="button"
                        onClick={() => props.moveReview(props.task)}
                        className="btn btn-primary" style={{margin:'5px'}}>
                    Move To Review
                </button>
            </li>
        )


};

export default TaskItem;