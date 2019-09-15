import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Container, Paper, Input} from '@material-ui/core';

class IdeaShower extends Component {
    constructor(){
        super()
        this.state = {
            filterKey: ''  
        }
    }

    handleChange = (e) => {
        this.setState({
            filterKey: e.target.value
        });
    }

    renderIdeas(ideas)  {
        return ideas.map( (idea, i) => {
            return(
                <Card key={i} className={"ideaCard"}>
                    <CardContent>
                        <Typography style={{color: 'grey'}}>
                            {idea.title}
                        </Typography>
                        <Typography style={{color: 'darkgrey'}}>
                            {idea.description}
                        </Typography>

                    </CardContent>
                </Card>
            );
        });
    }

    render() {
        let filteredIdeas = this.state.filterKey ? this.props.ideas.filter( c => {
            return c.title.toLowerCase().includes(this.state.filterKey.toLowerCase()) 
        }) : this.props.ideas;
        return (

            <Container >
                <Paper className={'ideasContainer'}  style={{paddingBottom : '30px'}}>
                <h4 style={{color: 'darkblue'}} >IdeaShower</h4>
                <Input
                    placeholder="Find an idea"
                    inputProps={{'aria-label': 'filter'}}
                    onChange={this.handleChange}
                />
                {this.renderIdeas(filteredIdeas)}
                </Paper>
            </Container>
        );
    }
}

export default IdeaShower;
