import React, {Component} from 'react';
import classes from "pages/Admin/Blog_Management/Summary.module.css";
import {Typography} from "@material-ui/core";
import SendSharpIcon from '@material-ui/icons/SendSharp';
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import {get, post} from "ConnectorService/BlogService";
import TextField from "@material-ui/core/TextField";
import {
    HtmlEditor,
    Image,
    Inject,
    Link,
    QuickToolbar,
    RichTextEditorComponent,
    Toolbar
} from '@syncfusion/ej2-react-richtexteditor';
import {withRouter} from "react-router-dom";

class UpdatePost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
        }

        this.handleSubmit = () => {
            const data = this.state;
            post(data)
                .then(
                    () => window.location.href = "/Admin/Blog/Summary"
                )
                .catch(
                    error => console.log(error.response)
                )
        }

        this.onChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        this.handleEditorChange = (event) => {
            this.setState({
                content: event.value
            })
            console.log(this.state);
        }
    }

    componentDidMount() {
        function removeTags(str) {
            if ((str === null) || (str === ''))
                return false;
            else
                str = str.toString();
            return str.replace(/(<([/])div>)/ig, '').replace(/(<div>)/ig, '');
        }

        get(this.props.location.state.id)
            .then(
                response =>
                    this.setState({
                        ...response.data,
                        content: removeTags(response.data.content)
                    })
            )
        console.log(this.state.content);
    }

    render() {
        return (
            <Paper variant={"elevation"} elevation={3} className={classes.blog_table_card}>
                <form onSubmit={this.handleSubmit}>
                    <div className={"d-flex justify-content-between align-items-center px-2"}>
                        <Typography variant="h5">
                            Create Post
                        </Typography>
                        <IconButton aria-label={"Send"} onClick={this.handleSubmit}>
                            <SendSharpIcon className={"special-a special-a-light"}/>
                        </IconButton>
                    </div>
                    <br/>

                    <TextField
                        id="title"
                        label="Title"
                        aria-label={"Title"}
                        name={"title"}
                        className={"w-100"}
                        value={this.state.title}
                        onChange={this.onChange}
                    />

                    <div className={"py-3"}/>

                    {!!this.state.content &&
                        <RichTextEditorComponent
                            change={this.handleEditorChange}
                            htmlAttributes={{name: "richer", value: "<p>HAHAHA</p>"}}
                            enableTabKey
                        >
                            <div dangerouslySetInnerHTML={{__html: this.state.content}}/>
                            <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
                        </RichTextEditorComponent>
                    }

                </form>
            </Paper>
        );
    }
}

export default withRouter(UpdatePost);