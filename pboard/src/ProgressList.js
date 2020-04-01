import React from 'react';

import TaskItem from './TaskItem';

class ProgressList extends React.Component {

    moveReview = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;

        this.props.tasks[taskIndex].column = "review";
        //console.log(this.props.tasks[taskIndex].column); Allows Us To Console What Prop We Are Accessing
        this.props.onUpdateTaskList(taskList);
    };

    moveToDo = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;

        this.props.tasks[taskIndex].column = "todo";
        //console.log(this.props.tasks[taskIndex].column); Allows Us To Console What Prop We Are Accessing
        this.props.onUpdateTaskList(taskList);
    };

    render() {
        const taskItems = this.props.tasks.map(task => {
            if (task.column === 'in-progress')
                return <TaskItem task={task} key={task.id} moveReview={this.moveReview} moveToDo={this.moveToDo}/>
        });

        return (
            <ul className="task-list list-group ">
                { taskItems }
            </ul>

        )

    }
}

export default ProgressList;