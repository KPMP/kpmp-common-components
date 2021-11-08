// expects the window.location.pathname style of path
export function isExpectedPath(pathname, expectedPath) {
    if(pathname === expectedPath) {
        return true
    } else if(expectedPath.replace(/\//g, '') == '') {
        return false
    } else if(pathname.split('/')[1].indexOf(expectedPath.replace(/\//g, '')) >= 0) {
        return true
    } else {
        return false
    }
}

