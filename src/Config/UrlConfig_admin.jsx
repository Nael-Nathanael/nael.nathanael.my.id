import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import React from "react";
import Stats from "pages/Admin/Blog_Management/Stats";
import Summary from "pages/Admin/Blog_Management/Summary";
import Access from "pages/Admin/Blog_Management/Access";

export const admin_url = [
    {
        icon: <HomeRoundedIcon/>,
        name: "Home",
        link: "/Admin",
        component: <Summary />
    }, {
        divider: true
    }, {
        summary: "Blog Management",
        content: [
            {
                name: "Stats",
                link: "/Admin/Blog/Stats",
                component: <Stats />
            }, {
                name: "Summary",
                link: "/Admin/Blog/Summary",
                component: <Summary />
            }, {
                name: "Access",
                link: "/Admin/Blog/Access",
                component: <Access />
            }
        ]
    }
]