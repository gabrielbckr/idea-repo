import React, { Component } from 'react';
import './App.css';
import IdeaSeeder from './IdeaSeeder';
import IdeaShower from './IdeaShower';
import {AppBar, Typography , Toolbar, Tab, Tabs} from '@material-ui/core';
import {ideas} from './ideas'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterKey: "",
            page: 'ideaShower'
        };
    }
    

//   componentDidMount(){
//     fetch('http://jsonplaceholder.typicode.com/users')
//     .then(response=> response.json())
//     .then(users=> this.setState({robots: users }));
//   }

    render() {
        
        return (
            <div className="App">
                <AppBar>
                    <Toolbar>
                        <Typography variant="h3" >
                            IdeaRepo 
                        </Typography>
                        
                        <div style={{marginLeft: 'auto'}}>
                        <Tabs aria-label="simple tabs example">
                            <Tab label="Record New Idea" onClick={() => {this.setState({page:'ideaSeeder'})}}/>
                            <Tab label="See ideas"  onClick={() => {this.setState({page:'ideaShower'})}}/>
                        </Tabs>
                        </div>
                    </Toolbar>
                </AppBar>
                <div className={"pagesDiv"}>
                    { this.state.page==='ideaSeeder'? <IdeaSeeder/> : ''}
                    <IdeaShower filterKey={" "} ideas={ideas}/>
                </div>
            </div>
            
        );
    }
}

export default App;
