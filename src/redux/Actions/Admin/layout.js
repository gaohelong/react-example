export const LAYOUT_MASK = 'LAYOUT_MASK';
export const LAYOUT_LOADING = 'LAYOUT_LOADING';
export const LAYOUT_SIDEBAR = 'LAYOUT_SIDEBAR';

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
