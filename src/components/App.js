import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Notes from './Notes';
import AddNote from './AddNote';

// class based component
class App extends Component {
    // If multiple child components like Notes, AddNotes share state, use state at their parent component like App instead of at child component
    // Data will be changed here in state
    state = {
        notes: [
            {
                id: 1,
                title: 'Notes 1',
                description: 'Notes 1 description'
            },
            {
                id: 2,
                title: 'Notes 2',
                description: 'Notes 2 description'
            },
            {
                id: 3,
                title: 'Notes 3',
                description: 'Notes 3 description'
            }
        ]
    };
    addNote = note => {
        this.setState({
            notes: [...this.state.notes, note]
        });
    };
        render(){
            return(
                <div className="container">
                    <Header />
                    <Notes notes={this.state.notes} />
                    <br />
                    <br />
                    <AddNote addNote={this.addNote}/>
                    <Footer />
                </div>
                
            )
        }
    }

// const App = () => {
//     return(
//         <div className="container">
//             <Header />
//             <Notes />
//             <Footer />
//         </div>
        
//     )
// }

export default App;