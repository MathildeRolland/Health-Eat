
// = = = = = = = = = = MENU = = = = = = = = = = //
export const TOGGLE_MOBILE_MENU = 'TOGGLE_MOBILE_MENU';
export const toggleMobileMenu = () => ({
    type: TOGGLE_MOBILE_MENU,
});


// = = = = = = = = = = SAVE INPUT VALUES IN THE STATE = = = = = = = = = = //
export const SAVE_INPUT = 'SAVE_INPUT';
export const saveInput = (value, name, storageObjectName) => ({
    type: SAVE_INPUT,
    value,
    name,
    storageObjectName,
});