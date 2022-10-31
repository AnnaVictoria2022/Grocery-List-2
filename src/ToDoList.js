import { Component } from 'react';

export class ToDoList extends Component {

    state = {
        userInput: '',
        myList: []
    }

    onChangeEvent(e) {
        this.setState({userInput:e})
    }

    addItem(input) {
        if (input === '') {
            alert ("Please enter an item!")
        }
        else {
        let listArray = this.state.myList;
        listArray.push(input);
        this.setState ({myList : listArray, userInput : ''});
        }
    }

    deleteItems() {
        let listArray = this.state.myList;
        listArray = [];
        this.setState ({myList : listArray});
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }


    render() {
        return(
            <div  className="container">
                <form onSubmit={this.onFormSubmit}>
                    <div className = "inputAndControls">
                        <div>
                            <input placeholder="input task" 
                                    type="text" 
                                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                                    value={this.state.userInput} />
                        </div>
                        <div>
                            <button className="btnAdd" onClick = {() => this.addItem(this.state.userInput)} >Add</button>
                        </div>
                        
                        <div>
                            <button className="btnClearAll" onClick = {() => this.deleteItems()} >Clear All</button>
                        </div>
                    </div>
                    <div className="list">
                        <ul>
                            {this.state.myList.map ((item, index) => (
                                <li onClick = {this.crossedWord} key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </form>
            </div>
        )
    }
}