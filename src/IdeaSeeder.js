import React, { Component } from 'react';
import { Input, TextField, Button } from '@material-ui/core';
import { Container , Paper  } from '@material-ui/core';

class IdeaSeeder extends Component {
    state = {
        description: "", contact: "", title: "", wholeIdea: ""
    }

    handleClickSaveButton = () => {
        const {title, description, contact, wholeIdea} = this.state
        this.sendNewIdea(title, description, contact, wholeIdea);
        this.props.closeIdeaSeeder()
    }

    sendNewIdea = async (title, description, contact, wholeIdea) => {
       fetch('http://127.0.0.1:5000/add-idea', {
            method: 'POST',
            mode: "cors",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({title, description, contact, wholeIdea}),
          });
      }

      handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
      }

    render() {
        return (
            <Container style={{paddingTop: '25px'}}>
            <Paper style={{paddingBottom: '30px'}}>
            <h4 style={{color: 'darkblue'}} >Create Idea</h4>
            <form>
                    <div><TextField name="title" 
                                onChange={this.handleChange} 
                                value={this.state.title} 
                                label="Title" /></div>
                    <div><TextField name="contact" 
                                onChange={this.handleChange} 
                                value={this.state.contact}
                                label="Contact"  /></div>
                    <div><TextField name="description" 
                                onChange={this.handleChange} 
                                value={this.state.description}
                                label="Description"  /></div>
                    <div><TextField name="wholeIdea" 
                                onChange={this.handleChange} 
                                value={this.state.wholeIdea}
                                label="Whole Idea"  /></div>
                    <div>
                        <Button label="Send Idea" 
                                  onClick={this.handleClickSaveButton}>
                            Send
                        </Button>
                    </div>
            </form>
            </Paper>
            </Container>
        );
    }
}

export default IdeaSeeder;
