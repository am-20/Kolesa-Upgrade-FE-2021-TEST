import { getItemsRequest } from './requests';
import { showLoader, hideLoader } from './loader';
import { hideError, showError } from './error';
import { appDisplayBlock, appElementArray } from './appElement';


export default () => {

    hideError();
    showLoader();

    getItemsRequest()
        .then(({ data }) => {
            if (data.result !== 'ok' || typeof data.html === 'undefined') {
                showError();
            } else {
                appDisplayBlock(data);
                appElementArray();
            }
        })

        .catch((e) => {
            showError();
        })

        .finally(() => {
            hideLoader();
        });
};

