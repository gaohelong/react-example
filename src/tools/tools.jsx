/* action */
import { layoutLoading, layoutMask } from '../redux/Actions/Admin';

export const loadCloseTool = (dispatch, Config, val = false) => {
    setTimeout(
        () => {
            dispatch(layoutLoading(val));
            dispatch(layoutMask(val));
        }   
        , Config.loading.time
    );
};

export const loadOpenTool = (dispatch, val = true) => {
    dispatch(layoutLoading(val));
    dispatch(layoutMask(val));
};
