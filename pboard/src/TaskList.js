import React from 'react';

import TaskItem from './TaskItem';

class TaskList extends React.Component {

    moveProgress = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;

        this.props.tasks[taskIndex].column = "in-progress";
        //console.log(this.props.tasks[taskIndex].column); Allows Us To Console What Prop We Are Accessing
        this.props.onUpdateTaskList(taskList);
    };


    moveReview = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;

        this.props.tasks[taskIndex].column = "review";
        //console.log(this.props.tasks[taskIndex].column); Allows Us To Console What Prop We Are Accessing
        this.props.onUpdateTaskList(taskList);
    };
























    render() {
        const taskItems = this.props.tasks.map(task => {
            if (task.column === 'todo')
                return (<TaskItem task={task} key={task.id} moveProgress={this.moveProgress} />)
        });

        return (
            <ul className="task-list list-group ">
                { taskItems}

            </ul>
        )
    }
}

export default TaskList;