import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import React from "react";
import Stats from "pages/admin/Blog_Management/Stats";
import Summary from "pages/admin/Blog_Management/Summary";
import Access from "pages/admin/Blog_Management/Access";
import CreatePost from "pages/admin/Blog_Management/CreatePost";
import UpdatePost from "pages/admin/Blog_Management/UpdatePost";

export const admin_url = [
    {
        icon: <HomeRoundedIcon />,
        name: "Home",
        link: "/Admin",
        component: Summary
    }, {
        divider: true
    }, {
        summary: "Blog Management",
        content: [
            {
                name: "Stats",
                link: "/Admin/Blog/Stats",
                component: Stats
            }, {
                name: "Summary",
                link: "/Admin/Blog/Summary",
                component: Summary
            }, {
                name: "Access",
                link: "/Admin/Blog/Access",
                component: Access
            }, {
                name: "Create",
                link: "/Admin/Blog/Create",
                component: CreatePost,
                hidden: true
            }, {
                name: "Update",
                link: "/Admin/Blog/Update",
                component: UpdatePost,
                hidden: true
            }
        ]
    }
]