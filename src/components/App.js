import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Notes from './Notes';
// import AddNote from './AddNote';
import AddNote from './AddNote_hooks';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import NotFound from './NotFound';
import Help from './Help';
import { NoteProvider } from '../contexts/Note.context';

// Functional component
const App = () => {
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

// class based component
// class App extends Component {
//         render(){
//             return(
//                 <div className="container">
//                     <Header />
//                         <NoteProvider>
//                             <Switch>
//                             <Route
//                                 path='/'
//                                 exact
//                                 component={Notes}
//                             />
//                             <Route
//                                 path='/add'
//                                 component={AddNote} 
//                             />
//                             <Route path='/about' component={About} />
//                             <Route path='/help' component={Help} />
//                             <Route component={NotFound} />
//                             </Switch>
//                         </NoteProvider>
//                     <Footer />
//                 </div>
                
//             )
//         }
//     }

export default App;