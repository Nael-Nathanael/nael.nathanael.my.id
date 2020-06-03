import React, { Component } from 'react'
import { MDBCard, MDBCardBody, MDBContainer } from 'mdbreact'
import BlogSummaryTable from './Component/BlogSummaryTable'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

export class Summary extends Component {
    render() {
        return (
            <MDBCard>
                <MDBCardBody>
                    <MDBContainer className="text-right">
                        <IconButton aria-label="delete" className="blue-gradient" onClick={() => window.location.href = "/admin/blog/create"}>
                            <AddIcon fontSize="small" className="text-white" />
                        </IconButton>
                    </MDBContainer>
                    <BlogSummaryTable />
                </MDBCardBody>
            </MDBCard>
        )
    }
}

export default Summary
