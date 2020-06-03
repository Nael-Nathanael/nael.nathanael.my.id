import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBContainer, MDBInput, MDBBtn } from 'mdbreact';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { post } from 'ConnectorService/BlogService';

export class CreatePost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: ""
        }

        this.handlechange = this.handlechange.bind(this);
        this.handleRichChange = this.handleRichChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                        <MDBBtn onClick={() => this.handleSubmit()}>submit</MDBBtn>
                    </MDBContainer>
                    <MDBInput label="Title" name="title" onChange={this.handlechange} />
                    <CKEditor
                        editor={ClassicEditor}
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

export default CreatePost
