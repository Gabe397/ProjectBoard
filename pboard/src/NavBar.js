import React from 'react';

class NavBar extends React.Component {

    onToDoSubmit = () =>{
        document.getElementById("toDo").style.display = "inline";
        document.getElementById("Done").style.display = "none";
        document.getElementById("Review").style.display = "none";
        document.getElementById("Progress").style.display = "none";
    };

    onProgressSubmit = () =>{
        document.getElementById("Progress").style.display = "inline";
        document.getElementById("toDo").style.display = "none";
        document.getElementById("Review").style.display = "none";
        document.getElementById("Done").style.display = "none";
    };

    onReviewSubmit = () =>{
        document.getElementById("Progress").style.display = "none";
        document.getElementById("toDo").style.display = "none";
        document.getElementById("Review").style.display = "inline";
        document.getElementById("Done").style.display = "none";
    };

    onDoneSubmit = () =>{
        document.getElementById("Progress").style.display = "none";
        document.getElementById("toDo").style.display = "none";
        document.getElementById("Review").style.display = "none";
        document.getElementById("Done").style.display = "inline";
    };

    showAll = () =>{
        document.getElementById("Progress").style.display = "inline";
        document.getElementById("toDo").style.display = "inline";
        document.getElementById("Review").style.display = "inline";
        document.getElementById("Done").style.display = "inline";
    };

    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pick A Column
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#" onClick={this.showAll}>Show All</a>
                    <a className="dropdown-item" href="#" onClick={this.onToDoSubmit}>To Do</a>
                    <a className="dropdown-item" href="#" onClick={this.onProgressSubmit}>Progress</a>
                    <a className="dropdown-item" href="#" onClick={this.onReviewSubmit}>Review</a>
                    <a className="dropdown-item" href="#" onClick={this.onDoneSubmit}>Done</a>
                </div>
            </div>

        )

    }
}

export default NavBar;