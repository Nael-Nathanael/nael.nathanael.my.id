import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Divider from '@material-ui/core/Divider';

const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        color: "white",
        backgroundColor: 'transparent',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        color: "white",
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiExpansionPanelDetails);

const LinkDivider = withStyles((theme) => ({
    root: {
        backgroundColor: "white",
        opacity: 0.3,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}))(Divider);

export default function NavItem(props) {
    const [expanded, setExpanded] = React.useState();

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            {props.data && props.data.map(
                (data, index) => {
                    if (data.divider) {
                        return <LinkDivider key={index}/>
                    } else if (!!data.name && !data.hidden) {
                        return (
                            <ListItem button key={index} component={"a"} href={data.link} className={"special-a"}>
                                <ListItemIcon className={"text-white special-a"}>
                                    {data.icon}
                                </ListItemIcon>
                                <ListItemText primary={data.name}/>
                            </ListItem>
                        )
                    }
                    return (
                        <ExpansionPanel
                            key={index}
                            square
                            expanded={expanded === 'panel' + index}
                            onChange={handleChange('panel' + index)}
                        >

                            <ExpansionPanelSummary
                                aria-controls={"panel" + index + "d-content"}
                                id={"panel" + index + "d-header"}
                                expandIcon={<ExpandMoreIcon/>}
                                className={"special-a"}
                            >
                                <ListItemIcon className={"text-white"}>
                                    <MenuRoundedIcon className={"text-white"}/>
                                </ListItemIcon>
                                <Typography>
                                    {data.summary}
                                </Typography>
                            </ExpansionPanelSummary>

                            <ExpansionPanelDetails className={"flex-column"}>
                                {data.content.map((content, c_index) => {
                                        if (!content.hidden) {
                                            return (
                                                <ListItem button component={"a"} href={content.link} key={c_index}
                                                          className={"special-a"}>
                                                    <ListItemIcon className={"text-white"}>
                                                        {content.icon ? content.icon : <ChevronRightIcon/>}
                                                    </ListItemIcon>
                                                    <ListItemText primary={content.name}/>
                                                </ListItem>
                                            )
                                        }
                                        return "";
                                    }
                                )}
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    )
                }
            )}
        </div>
    );
}