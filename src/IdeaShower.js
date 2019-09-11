import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Container, Paper } from '@material-ui/core';

class IdeaShower extends Component {


    renderIdeas(ideas)  {
        return ideas.map(idea => {
            return(
                <Card classname={"ideaCard"}>
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
                <Paper>
                <h4 style={{color: 'lightblue'}} >IdeaShower</h4>
                {this.renderIdeas(this.props.ideas)}
                </Paper>
            </Container>
        );
    }
}

export default IdeaShower;
