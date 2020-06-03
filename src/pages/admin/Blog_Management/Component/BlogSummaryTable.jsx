import React, { Component } from 'react'
import { MDBDataTableV5 } from 'mdbreact';
import { getAll, del } from 'ConnectorService/BlogService';
import { NavLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export class BlogSummaryTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datatable: {
                columns: [],
                data: []
            }
        }

        this.load_content = this.load_content.bind(this);
    }

    delete(id) {
        del(id).then(() => this.load_content())
    }

    componentDidMount() {
        this.load_content();
    }

    load_content() {
        const columns = [
            {
                label: 'No',
                field: "no"
            }, {
                label: 'Title',
                field: 'title',
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Post date',
                field: 'postdate',
                sort: 'asc',
            },
            {
                label: 'Change',
                field: 'change',
                sort: 'disabled',
            },
            {
                label: 'Delete',
                field: 'delete',
                sort: 'disabled',
            },
        ];

        const rows = [];

        getAll().then(
            response => {
                response.data.forEach((element, index) => {
                    rows.push(
                        {
                            no: index + 1,
                            title: element.title,
                            postdate: element.postdate,
                            change:
                                <NavLink to={"/admin/blog/update/" + element.id} >
                                    <IconButton aria-label="delete" className="night-fade-gradient">
                                        <EditIcon fontSize="small" className="text-white" />
                                    </IconButton>
                                </NavLink>,
                            delete:
                                <IconButton aria-label="delete" className="warm-flame-gradient" onClick={() => this.delete(element.id)}>
                                    <DeleteIcon fontSize="small" className="text-white" />
                                </IconButton>
                        }
                    )
                });
            }
        ).then(() =>
            this.setState({
                datatable: {
                    columns: columns,
                    rows: rows
                }
            })
        );
    }

    render() {
        return (
            <MDBDataTableV5
                className="align-middle"
                hover
                data={this.state.datatable}
                materialSearch
                searchTop
                searchBottom={false}
                paging={false}
                sortable={false} />
        )
    }
}

export default BlogSummaryTable
