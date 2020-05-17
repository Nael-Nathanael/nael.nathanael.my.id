export function getSortedRoute(url_tree) {
    let url_level = 0;
    const urlList = [];

    for (let index in url_tree) {
        const focus = url_tree[index];
        if (focus.name) {
            const this_url_level = focus.link.split("/").length;
            if (this_url_level > url_level) {
                url_level = this_url_level;
            }
            urlList.push(
                {
                    link: focus.link,
                    component: focus.component
                }
            )
        } else if (focus.summary) {
            for (let inner_index in focus.content) {
                const inner_focus = focus.content[inner_index];
                if (inner_focus.name) {
                    const this_url_level = inner_focus.link.split("/").length;
                    if (this_url_level > url_level) {
                        url_level = this_url_level;
                    }
                    urlList.push(
                        {
                            link: inner_focus.link,
                            component: inner_focus.component
                        }
                    )
                }
            }
        }
    }

    const sortedRoute = [];
    while (url_level > 0) {
        const route_with_this_level = urlList.filter(isThisLevel);
        sortedRoute.push(...route_with_this_level);
        url_level--;
    }

    function isThisLevel(url_object) {
        return url_object.link.split("/").length === url_level;
    }

    return sortedRoute;
}
