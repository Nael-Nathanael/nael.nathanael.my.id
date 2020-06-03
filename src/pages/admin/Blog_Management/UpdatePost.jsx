import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBContainer, MDBInput, MDBBtn } from 'mdbreact';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { get, post } from 'ConnectorService/BlogService';

export class UpdatePost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            title: "",
            content: ""
        }

        this.handlechange = this.handlechange.bind(this);
        this.handleRichChange = this.handleRichChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // get()
        const path = window.location.pathname.split("/");
        get(path[path.length - 1]).then(
            response => this.setState({
                id: response.data.id,
                title: response.data.title,
                content: response.data.content
            })
        ).catch(
            error => console.log(error.response)
        )
    }

    handlechange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleRichChange(data) {
        this.setState({
            content: data
        });
    }

    handleSubmit() {
        post(this.state).then(() => window.location.href = "/admin/blog/summary");
    }

    render() {
        return (
            <MDBCard>
                <MDBCardBody>
                    <MDBContainer className="text-right">
                        <MDBBtn className="btn blue-gradient" onClick={() => this.handleSubmit()}>submit</MDBBtn>
                    </MDBContainer>
                    <MDBInput label="Title" name="title" onChange={this.handlechange} value={this.state.title} />
                    <CKEditor
                        editor={ClassicEditor}
                        data={this.state.content}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            this.handleRichChange(data);
                        }}
                    />
                </MDBCardBody>
            </MDBCard>
        )
    }
}

export default UpdatePost
