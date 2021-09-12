import React from "react";
import './App.css';

import MenuBar from "./components/MenuBar/MenuBar.component";
import SearchBox from "./components/SearchBox/SearchBox.component";
import StandardButton from "./components/StandardButton/StandardButton.component";
import TasksList from './components/TasksList/TasksList.component';
import Calendar from "./components/Calendar/Calendar.component";
import NewItemForm from "./components/NewItemForm/NewItemForm.component";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentlyAddingNewTask: false,
      searchQuery: "",
      tasksList: [
        {
          "id": 1,
          "title": "Go shop 🛍️",
          "description": "Get pineapples and jalapenos",
          "tags": ["shopping", "groceries"],
      },
      {
          "id": 2,
          "title": "Write a React app",
          "description": "Write another react app.",
          "tags": ["code"],
      }
      ],
      filteredTasksList: [

      ],
    }
  }

  filterTasks = (searchQuery) => {
    const _filteredTasks = this.state.tasksList.filter(task => {
        return task.title.toLowerCase().includes(searchQuery.toLowerCase());
    })

    this.setState({
      searchQuery: searchQuery,
      filteredTasksList: _filteredTasks
    })
    console.log(this.state.filteredTasksList);
  }

  toggleAddNewItemWindow = () => this.setState({ currentlyAddingNewTask: !this.state.currentlyAddingNewTask })

  addNewItem = (task) => {
    var currentId = 0;
    this.state.tasksList.forEach(task => {
      if(task.id > 0) currentId = task.id;
    })
    
    task.id = ++currentId;

    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, task],
      currentlyAddingNewTask: false,
    }));

  }

  removeTask = (taskId) => {
    var newTaskList = this.state.tasksList.filter(task => {return task.id !== taskId});
    this.setState({ tasksList: newTaskList })
  }

  render() {
    const { tasksList, filteredTasksList, searchQuery, currentlyAddingNewTask, toggleAddNewItemWindow } = this.state;

    return(
      <div>
        <NewItemForm closeWindow={toggleAddNewItemWindow} addNewItemFunction={this.addNewItem} isVisibleFunction={toggleAddNewItemWindow} isVisible={currentlyAddingNewTask}/>
        <MenuBar />
        <div className="wrapper">
          <div className="a">
              <div>
                <StandardButton onClick={this.toggleAddNewItemWindow} buttonText="Add"/>
                <SearchBox onChange={this.filterTasks} />
                <TasksList removeTask={(taskId) => this.removeTask(taskId)} tasks={searchQuery === "" ? tasksList : filteredTasksList} />
              </div>
          </div>
          <div className="b">
              <Calendar tasks={tasksList} />
          </div>
        </div>
      </div>
    );

  }
}

export default App;
