import React from 'react';
import StandardButton from '../StandardButton/StandardButton.component';
import './NewItemForm.styles.css';

class NewItemForm extends React.Component {



    constructor() {
        super();
        this.state = {
            tags: [],
            error: "",
        }
    }

    submitFormData = (e) => {
        e.preventDefault();

        if (e.target.itemTitle.value.length < 2) {
            this.setState({ error: "One of the field(s) are too short." })
            return;
        }

        const newItem = {
            "id": null,
            "title": e.target.itemTitle.value,
            "description": e.target.itemDescription.value,
            "tags": this.state.tags,
            "time": new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false })
        }
        this.setState({ tags: [] })
        this.props.addNewItemFunction(newItem)
    }

    createTags = (e) => {
        if (e.key === "," || e.key == "Enter") {
            e.preventDefault();
            if (this.state.tags.length > 6) { this.setState({ error: "Only a max of 6 tags allowed." }); return; }
            this.setState(prevState => ({
                tags: [...prevState.tags, e.target.value]
            }), () => e.target.value = "")
        }
    }

    closeForm = (e) => {
        e.preventDefault();
        this.props.toggleFunc()
    }

    render() {

        const errorStyling = { "color": "white", "display": "block" }

        return (
            this.props.isVisible ?
                <div>
                    <form ref={this.windowRef} className="newItemForm" onSubmit={this.submitFormData}>
                        <h1>New Item</h1>
                        <input autoFocus="true" onChange={() => this.setState({ error: "" })} placeholder="Title" name="itemTitle" id="input" autoComplete="off" />
                        <textarea placeholder="Description" name="itemDescription" id="textArea"></textarea>
                        <input autoComplete="off" placeholder="Comma separated tags (optional)" name="itemTags" onKeyDown={this.createTags} contentEditable="true" id="tagsArea" className="" />
                        <span style={errorStyling}>{this.state.error}</span>
                        <div className="tagsContainer">
                            {this.state.tags.map(tag => {
                                return <div className="tag">{tag}</div>
                            })}
                        </div>
                        <StandardButton buttonText="Add Item" />
                        <StandardButton buttonText="Cancel" onClick={this.closeForm} />
                    </form>
                </div>
                :
                null
        );
    }

}

export default NewItemForm;