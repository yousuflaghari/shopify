export const addItem = (product) => {
  return {
    type: "ADD_CART",
    payload: product,
  };
};
/**
 * jahan add cart ka function hai wahan dispatch(action) call karain
 *  gy yh action ko call kary ga jahan action bna hoa..
 * reducer action ko handle karta hai .
 * hai usy call kary ga . reducer chaly ga .jb chaly ga wo value store
 *  ko mil jay gi wo provider ko mil jay gi .
 * phr hamain hr astate main mily gi
 *
 */
