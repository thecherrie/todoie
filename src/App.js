import React from "react";
import './App.css';

import MenuBar from "./components/MenuBar/MenuBar.component";
import SearchBox from "./components/SearchBox/SearchBox.component";
import StandardButton from "./components/StandardButton/StandardButton.component";
import TasksList from './components/TasksList/TasksList.component';
import Calendar from "./components/Calendar/Calendar.component";
import NewItemForm from "./components/NewItemForm/NewItemForm.component";
import OutsideClick from 'react-outsideclick';


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentlyAddingNewTask: false,
      searchQuery: "",
      tasksList: [],
      filteredTasksList: [

      ],
    }
  }

  componentDidMount() {
    var values = [
      {
        "id": 1,
        "title": "Go shop 🛍️",
        "description": "Get pineapples and jalapenos",
        "tags": ["shopping", "food"],
        "time": "12:00"
      },
      {
        "id": 2,
        "title": "Write a React app",
        "description": "Write another react app.",
        "tags": ["code"],
        "time": "11:00"
      }
    ],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    this.setState({ tasksList: values })
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
      if (task.id > 0) currentId = task.id;
    })

    task.id = ++currentId;

    localStorage.setItem(task.id, JSON.stringify(task))

    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, task],
      currentlyAddingNewTask: false,
    }));

  }

  removeTask = (taskId) => {
    var newTaskList = this.state.tasksList.filter(task => { return task.id !== taskId });
    localStorage.removeItem(taskId)
    this.setState({ tasksList: newTaskList })
  }

  render() {
    const { tasksList, filteredTasksList, searchQuery, currentlyAddingNewTask, toggleAddNewItemWindow } = this.state;

    return (
      <div>
        {this.state.currentlyAddingNewTask ?
          <NewItemForm toggleFunc={this.toggleAddNewItemWindow} closeWindow={toggleAddNewItemWindow} addNewItemFunction={this.addNewItem} /*isVisibleFunction={toggleAddNewItemWindow}*/ isVisible={currentlyAddingNewTask} /> :
          null}
        <MenuBar />
        <div className="wrapper">
          <div className="tasksContentWrapper">
            <div>
              <StandardButton onClick={this.toggleAddNewItemWindow} buttonText="Add" />
              <SearchBox onChange={this.filterTasks} />
              <TasksList removeTask={(taskId) => this.removeTask(taskId)} tasks={searchQuery === "" ? tasksList : filteredTasksList} />
            </div>
          </div>
          <div className="b">
            <Calendar tasks={tasksList} />
          </div>
        </div>
        <div className="mainFooter">
            <h2>copyright a.c.</h2>
        </div>
      </div>
    );

  }
}

export default App;
