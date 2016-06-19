export const INIT_ITEMLIST = 'INIT_ITEMLIST';

/*
 * action types
 */

export const SHOW_GOODS = 'SHOW_GOODS';

/**
 * action creators: showGoods
 * @param goodsList
 * @returns {{type: string, goodsList: *}}
 */
export function showGoods(goodsList) {
  return {
    type: SHOW_GOODS,
	goodsList: goodsList
  }
}
