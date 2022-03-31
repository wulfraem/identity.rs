import {defaultClientConfig, initIdentity, setupDOMLog} from "./utils_web.js";
import {createIdentity} from "./create_did.js";
import {createVC} from "./create_vc.js";
import {manipulateIdentity} from "./manipulate_did.js";
import {keyExchange} from "./key_exchange.js";
import {resolution} from "./resolution.js";
import {createVP} from "./create_vp.js";
import {revokeVC} from "./revoke_vc.js";
import {privateTangle} from "./private_tangle.js";
import {resolveHistory} from "./resolve_history.js";

export {
    initIdentity,
    defaultClientConfig,
    createIdentity,
    createVC,
    manipulateIdentity,
    keyExchange,
    resolution,
    createVP,
    revokeVC,
    privateTangle,
    resolveHistory,
};

window.onload = async () => {

    setupDOMLog();

    await initIdentity();
    const CLIENT_CONFIG = defaultClientConfig();

    //handle create identity on click event
    document
        .querySelector("#create-identity-btn")
        .addEventListener("click", () => createIdentity(CLIENT_CONFIG));

    //handle resolve DID on click event
    document
        .querySelector("#resolve-did-btn")
        .addEventListener("click", async () => {
            const inputDid = document.querySelector("#resolve-did-input").value;
            const result = await resolution(CLIENT_CONFIG, inputDid);
            console.log(result);
        });

    //handle manipulate DID on click event
    document
        .querySelector("#manipulate_did_btn")
        .addEventListener("click", () => manipulateIdentity(CLIENT_CONFIG));

    //handle create VC on click event
    document
        .querySelector("#create_vc_btn")
        .addEventListener("click", () => createVC(CLIENT_CONFIG));

    //handle create VP on click event
    document
        .querySelector("#create_vp_btn")
        .addEventListener("click", () => createVP(CLIENT_CONFIG));

    //handle revoke VC on click event
    document
        .querySelector("#revoke_vc_btn")
        .addEventListener("click", () => revokeVC(CLIENT_CONFIG));

    //handle private tangle DID creation on click event
    document
        .querySelector("#private_tangle_btn")
        .addEventListener("click", () => {
            const restURL = document.querySelector("#create-private-rest-url").value;
            const networkName = document.querySelector("#create-private-network-name").value;
            privateTangle(restURL, networkName);
        });

    //handle key exchange example on click event
    document
        .querySelector("#key_exchange_btn")
        .addEventListener("click", () => keyExchange(CLIENT_CONFIG));

    //handle resolve history on click event
    document
        .querySelector("#did_history_btn")
        .addEventListener("click", () => resolveHistory(CLIENT_CONFIG));

};
