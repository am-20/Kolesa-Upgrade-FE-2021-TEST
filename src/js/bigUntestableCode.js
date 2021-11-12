import { getItemsRequest } from './requests';
import { loaderDisplayBlock, loaderDisplayNone } from './loader';
import { errorDisplayNone, errorOccured } from './error';
import { appDisplayBlock, appElementArray } from './appElement';


export default () => {

    errorDisplayNone();
    loaderDisplayBlock();

    getItemsRequest()
        .then(({ data }) => {
            if (data.result !== 'ok' || typeof data.html === 'undefined') {
                errorOccured();
            } else {
                appDisplayBlock();
                appElementArray();
            }
        })

        .catch((e) => {
            errorOccured();
        })

        .finally(() => {
            loaderDisplayNone();
        });
};

