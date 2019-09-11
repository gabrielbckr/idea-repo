import React, { Component } from 'react';
import { Input, FormControl, TextField } from '@material-ui/core';
import { Container , Paper  } from '@material-ui/core';
// import { Editor } from 'react-draft-wysiwyg';


class IdeaSeeder extends Component {
    state = {}

    handleSaveButtonClick = () => {

    }

    render() {
        return (
            <Container>

            <Paper>
                <h4>Create Idea</h4>
                    <div>
                <FormControl>
                        description <TextField type={'string'} name={'c1'} />
                </FormControl>
                    </div>
                    <div>
                <FormControl>
                        contact <Input type={'string'} name={'c2'} />
                </FormControl>
                    </div>
                    <Input type={'submit'} value={'Register Idea'} />
            </Paper>
            </Container>
        );
    }
}

export default IdeaSeeder;
