import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import React from "react";

export const admin_url = [
    {
        icon: <HomeRoundedIcon/>,
        name: "Home",
        link: "#"
    }, {
        divider: true
    }, {
        summary: "Blog Management",
        content: [
            {
                name: "link1",
                link: "#"
            }, {
                name: "link1",
                link: "#"
            }
        ]
    }, {
        summary: "Another Link",
        content: [
            {
                name: "link1",
                link: "#"
            }, {
                name: "link1",
                link: "#"
            }
        ]
    }
]