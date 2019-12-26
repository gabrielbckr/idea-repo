import React, { Component } from 'react';
import './App.css';
import IdeaSeeder from './IdeaSeeder';
import IdeaShower from './IdeaShower';
import {AppBar, Typography , Toolbar, Tab, Tabs} from '@material-ui/core';
// import {ideas} from './ideas'
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterKey: "",
            page: 'ideaShower',
            ideas: []
        };
    }
    

  componentDidMount(){
    axios.get("http://127.0.0.1:5000/get-ideas")
    .then(response => this.setState({ideas: response.data}));
  }

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
                    { this.state.page==='ideaSeeder'? 
                        <IdeaSeeder closeIdeaSeeder={() => {this.setState({page:'ideaShower'})}}/> : ''
                    }
                    <IdeaShower filterKey={this.state.filterKey} ideas={this.state.ideas}/>
                </div>
            </div>
            
        );
    }
}

export default App;
