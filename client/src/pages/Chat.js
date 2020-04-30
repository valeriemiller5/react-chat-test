import React from "react";
import axios from "axios";
import ChatBox from "../components/ChatBox";
import { Container, Control, Textarea, Input, Button } from "reactbulma"

class Chat extends React.Component {
    state = {
        myName: "",
        comment: "",
        avatar: ""
    }

    componentDidMount() {
        this.handleComments();
    };

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleComments = () => {
        axios.get("/api/users")
            .then(results => {
                // console.log(results.data)
                var data = results.data;
                for (var i = 0; i < data.length; i++) {
                    // console.log(data[i].name);
                    if(this.state.myName === data[i].name) {
                        let id = data[i]._id;
                        console.log(id)
                    }
                }
            })
    }


    render() {
        return (
            <div>
                <ChatBox></ChatBox>
                <Container style={form}>
            <Control>
                <Input primary name="myName" value={this.state.myName} onChange={this.handleChange} placeholder="Your Name"/>
                <Textarea primary name="comment" value={this.state.comment} onChange={this.handleChange} placeholder="Enter Comment"/>
            </Control>
            <Button primary outlined onClick={this.handleComments}>Submit</Button>
        </Container>
            </div>
        )
    }
}

export default Chat;

const form = {
    marginTop: 300 + 'px',
    width: 500 + 'px'
}