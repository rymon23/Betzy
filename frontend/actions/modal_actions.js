export const ENABLE_MODAL = "ENABLE_MODAL";
export const DISABLE_MODAL = "DISABLE_MODAL";

export const enableModal = (modal) => {
    return { type: ENABLE_MODAL, modal};
};

export const disableModal = () => {
    return { type: DISABLE_MODAL };
};
