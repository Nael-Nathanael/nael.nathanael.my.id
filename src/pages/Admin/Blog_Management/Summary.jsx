import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {Delete, Edit} from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import {Button, Typography} from "@material-ui/core";
import classes from 'pages/Admin/Blog_Management/Summary.module.css';
import {del, getAll} from "ConnectorService/BlogService";
import 'typeface-roboto';
import {Link, Redirect} from "react-router-dom";

class Summary extends Component {
    columns = [{
        dataField: 'title',
        text: 'Title',
        classes: 'align-middle'
    }, {
        dataField: 'author',
        text: 'Author',
        classes: 'align-middle'
    }, {
        dataField: 'postdate',
        text: 'PostDate',
        classes: 'align-middle'
    }, {
        dataField: 'noData',
        isDummyField: true,
        text: ".Act",
        "headerStyle": () => {
            return {width: "200px", textAlign: 'center'};
        },
        classes: () => "text-center align-middle",
        "formatter": (cell, row) => this.getActionButtons(row)
    }]

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }

        this.getActionButtons = (row) => {
            return (
                <>
                    <Link to={{
                        pathname: "/Admin/Blog/Update",
                        state: {
                            id: row.id
                        }
                    }}>
                        <IconButton aria-label="Edit">
                            <Edit className={"special-a-light"}/>
                        </IconButton>
                    </Link>
                    <IconButton aria-label="delete" onClick={() => this.delete(row.id)}>
                        <Delete className={"special-a-light"}/>
                    </IconButton>
                </>
            )
        }

        this.delete = (id) => {
            del(id).then(() =>
                {
                    const data = {...this.state.data};
                    const removed = [];
                    for (let index in data) {
                        if (data[index].id !== id) {
                            removed.push(data[index])
                        }
                    }

                    this.setState({
                        data: removed
                    })
                }
            )
        }

    }

    componentDidMount() {
        getAll()
            .then(
                response => {
                    this.setState(
                        {
                            data: response.data
                        }
                    );
                }
            )
            .catch(
                error => console.log(error.response)
            );
    }

    render() {
        const {state, columns} = this;
        const {redirector, data} = state;
        return redirector || (
            <Paper variant={"elevation"} elevation={3} className={classes.blog_table_card}>
                <div className={"d-flex justify-content-between align-items-center px-2"}>
                    <Typography variant="h5">
                        Blog Post Summary
                    </Typography>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        endIcon={<AddIcon/>}
                        onClick={() => window.location.href = "/Admin/Blog/Create"}
                    >
                        Add New Post
                    </Button>
                </div>
                <br/>
                <BootstrapTable keyField='id' data={data} columns={columns} bordered={false}/>
            </Paper>
        );
    }
}

export default Summary;