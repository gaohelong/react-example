export const LAYOUT_MASK = 'LAYOUT_MASK';
export const LAYOUT_LOADING = 'LAYOUT_LOADING';
export const LAYOUT_SIDEBAR = 'LAYOUT_SIDEBAR';
export const LAYOUT_CONTENTTOGGLE = 'LAYOUT_CONTENTTOGGLE';

export const layoutMask = (val) => {
    return {
        type: LAYOUT_MASK,
        data: {
            mask: val
        }
    };
};

export const layoutLoading = (val) => {
    return {
        type: LAYOUT_LOADING,
        data: {
            loading: val
        }
    };
};

export const layoutSidebar = (val) => {
    return {
        type: LAYOUT_SIDEBAR,
        data: {
            sidebar: val
        }
    };
}

export const layoutContentToggle = (val) => {
    return {
        type: LAYOUT_CONTENTTOGGLE,
        data: {
            contentToggle: val
        }
    };
}
