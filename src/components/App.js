import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Notes from './Notes';
import AddNote from './AddNote';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import NotFound from './NotFound';
import Help from './Help';
import { NoteProvider } from '../contexts/Note.context';


// class based component
class App extends Component {
    // All will be transfer into Note.context.js later for global access
    // If multiple child components like Notes, AddNotes share state, use state at their parent component like App instead of at child component
    // Data will be changed here in state.
    // state = {
    //     notes: [
    //         {
    //             id: 1,
    //             title: 'Notes 1',
    //             description: 'Notes 1 description'
    //         },
    //         {
    //             id: 2,
    //             title: 'Notes 2',
    //             description: 'Notes 2 description'
    //         },
    //         {
    //             id: 3,
    //             title: 'Notes 3',
    //             description: 'Notes 3 description'
    //         }
    //     ]
    // };
    // addNote = note => {
    //     this.setState({
    //         notes: [...this.state.notes, note]
    //     });
    // };
    // removeNote = id => {
    //     console.log(id)
    //     this.setState({
    //         notes: this.state.notes.filter(note => note.id !== id)
    //     });
    // };
        render(){
            return(
                <div className="container">
                    <Header />
                        <NoteProvider>
                            <Switch>
                            <Route
                                path='/'
                                exact
                                component={Notes}
                            />
                            <Route
                                path='/add'
                                component={AddNote} 
                            />
                            <Route path='/about' component={About} />
                            <Route path='/help' component={Help} />
                            <Route component={NotFound} />
                            </Switch>
                        </NoteProvider>
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