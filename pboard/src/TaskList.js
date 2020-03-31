import React from 'react';

import TaskItem from './TaskItem';

class TaskList extends React.Component {

    markDone = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;
        //taskList.splice(taskIndex, 1);

        this.props.tasks[taskIndex].column = "in-progress";
        console.log(this.props.tasks[taskIndex].column);
        this.props.onUpdateTaskList(taskList);
    };

    render() {
        const taskItems = this.props.tasks.map(task => {
            if (task.column === 'todo')
                return (<TaskItem task={task} key={task.id} markDone={this.markDone} />)
        });

        return (
            <ul className="task-list list-group ">
                { taskItems}

            </ul>
        )
    }
}

export default TaskList;