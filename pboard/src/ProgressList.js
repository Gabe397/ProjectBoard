import React from 'react';

import TaskItem from './TaskItem';

class ProgressList extends React.Component {

    markDone = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let progressList = this.props.tasks;
        progressList.splice(taskIndex, 1);
        console.log(this.props);
        this.props.onUpdateTaskList(progressList);
    };


    render() {
        const taskItems = this.props.tasks.map(task => {
            if (task.column === 'in-progress')
                return <TaskItem task={task} key={task.id} markDone={this.markDone} />
        });



        return (
            <ul className="task-list list-group ">
                { taskItems }
            </ul>

        )

    }
}

export default ProgressList;