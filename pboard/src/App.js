import React from 'react';
import axios from 'axios';

import TaskList from './TaskList';
import ReviewList from './ReviewList';
import AddTask from './AddTask';
import styles from './styles.css';
import ProgressList from "./ProgressList";
import DoneList from "./DoneList";

class App extends React.Component {
    state = {
        tasks: [],
        errorMessage: '',

        toDo:[]
    };

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/posts')
            .then(response => {
                this.setState({ tasks: response.data });
            }).catch(error => {
            this.setState({ errorMessage: error.message });
        });
    }

    onAddTask = (taskName) => {
        let tasks = this.state.tasks;
        tasks.push({
            title: taskName,
            id: this.state.tasks.length + 1,
            type: 'task',
            column: 'todo'
        });

        this.setState({ tasks });
    };

    onUpdateTaskList = (newTaskList) => {
        this.setState({ tasks: newTaskList });
    };

    render() {
        return (
            <div> <h1>Task Board</h1>

            <div className="container">
                <AddTask onSubmit={this.onAddTask} />
                <div className="row">
                    <div className="col" id = "toDo">
                        <h2>To Do</h2>
                        <TaskList tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList} />
                    </div>
                    <div className="col" id = "Progress">
                        <h2>In Progress</h2>
                        <ProgressList tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList}/>

                    </div>
                    <div className="col" id = "Review">
                        <h2>Review</h2>
                        <ReviewList tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList}/>
                    </div>
                    <div className="col" id = "Done">
                        <h2>Done</h2>
                        <DoneList tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList}/>
                    </div>
                </div>

            </div>

            </div>
        );
    }
}

export default App;