import React from 'react';

import TaskItem from './TaskItem';

class DoneList extends React.Component {

    moveReview = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;

        this.props.tasks[taskIndex].column = "review";
        //console.log(this.props.tasks[taskIndex].column); Allows Us To Console What Prop We Are Accessing
        this.props.onUpdateTaskList(taskList);
    };


    render() {
        const taskItems = this.props.tasks.map(task => {
            if (task.column === 'done')
                return <TaskItem task={task} key={task.id} moveReview={this.moveReview} />
        });



        return (
            <ul className="task-list list-group ">
                { taskItems }
            </ul>

        )

    }
}

export default DoneList;