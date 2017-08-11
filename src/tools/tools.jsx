/* action */
import { layoutLoading, layoutMask, layoutContentToggle } from '../redux/Actions/Admin';

export const loadCloseTool = (dispatch, Config, val = false) => {
    setTimeout(
        () => {
            dispatch(layoutLoading(val));
            dispatch(layoutMask(val));
            dispatch(layoutContentToggle(true));
        }   
        , Config.loading.time
    );
};

export const loadOpenTool = (dispatch, val = true) => {
    dispatch(layoutLoading(val));
    dispatch(layoutMask(val));
};

export const contentToggle = (dispatch, val = true) => {
    dispatch(layoutContentToggle(val));
};
