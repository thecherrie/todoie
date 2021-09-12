import React from 'react';
import './TasksList.styles.css';
import Task from '../Task/Task.component';

class TasksList extends React.Component {

    constructor(props){
        super(props);

        this.state = {}
    }

    render() {
        return(
            <div className="tasksListWrapper">
                {
                    this.props.tasks.map(task => {
                        return <Task onRemoveBtnClick={(id)=>this.props.removeTask(id)} 
                        key={task.id} 
                        id={task.id} 
                        title={task.title} 
                        description={task.description} 
                        tags={task.tags}
                        />
                    })
                }
            </div>
        );
    }

}

export default TasksList;