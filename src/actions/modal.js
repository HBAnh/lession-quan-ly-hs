import * as _TypesModal from "../constants/modal";

export const showModal = () => ({
  type: _TypesModal.SHOW_MODAL,
});

export const hideModal = () => ({
  type: _TypesModal.HIDE_MODAL,
});
