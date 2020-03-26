import React from 'react';

import TaskItem from './TaskItem';

class DoneList extends React.Component {

    markDone = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let DoneList = this.props.tasks;
        DoneList.splice(taskIndex, 1);
        console.log(this.props);
        this.props.onUpdateTaskList(DoneList);
    };


    render() {
        const taskItems = this.props.tasks.map(task => {
            if (task.column === 'done')
                return <TaskItem task={task} key={task.id} markDone={this.markDone} />
        });



        return (
            <ul className="task-list list-group ">
                { taskItems }
            </ul>

        )

    }
}

export default DoneList;