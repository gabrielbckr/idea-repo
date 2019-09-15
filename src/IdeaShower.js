import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Container, Paper, Input} from '@material-ui/core';

class IdeaShower extends Component {
    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            filterKey: e.target.value
        });
    }

    renderIdeas(ideas)  {
        let filteredIdeas = this.props.filterKey ? ideas.filter( c => 
            c.title.toLowerCase().includes(this.props.filterKey.toLowerCase()) 
        ) : ideas;
        return filteredIdeas.map( (idea, i) => {
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
        
        return (
            <Container>
                <Paper className={'ideasContainer'}>
                <h4 style={{color: 'lightblue'}} >IdeaShower</h4>
                <Input
                    placeholder="Find an idea"
                    inputProps={{
                        'aria-label': 'filter'}}
                    onChange={this.handleChange}
                />
                {this.renderIdeas(this.props.ideas)}
                </Paper>
            </Container>
        );
    }
}

export default IdeaShower;
