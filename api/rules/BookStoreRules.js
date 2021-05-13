export default {
  validateName: (payload) => Object.prototype.hasOwnProperty.call(payload, 'name'),
  validateReadPage: (payload) => {
    if (!Object.prototype.hasOwnProperty.call(payload, 'readPage') || !Object.prototype.hasOwnProperty.call(payload, 'pageCount')) {
      return false;
    }

    const { readPage, pageCount } = payload;
    if (readPage > pageCount) {
      return false;
    }

    return true;
  },
};
