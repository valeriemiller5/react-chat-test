import React from "react";
import { Container, Control, Input, Button } from "reactbulma";
import axios from "axios";

class Signup extends React.Component {
    state = {
        name: "",
        avatar: ""
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.post('/api/users', { name: this.state.name, avatar: this.state.avatar })
            .then((result) => {
                console.log('result from app.js', result.data);
                window.location.replace("/chat");
            })
            .catch(err => console.log(JSON.stringify(err)))
    }


    render() {
        return (
            <Container style={form}>
                <Control>
                    <label>Name:</label>
                    <Input
                        info
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="i.e. John Smith"
                    />
                    <br /><br />
                    <label>Avatar:</label>
                    <Input
                        info
                        name="avatar"
                        value={this.state.avatar}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="URL only"
                    />
                    <br /><br />
                    <Button info onClick={this.handleSubmit}>Submit</Button>
                </Control>
            </Container>
        )
    }
}

export default Signup;

const form = {
    marginTop: 300 + 'px',
    width: 500 + 'px'
}