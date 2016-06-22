export const INIT_ITEMLIST = 'INIT_ITEMLIST';
import { schemas } from '../reducers/Schema';
import { normalize, arrayOf } from 'normalizr-immutable';

/*
 * action types
 */

export const SHOW_GOODS = 'SHOW_GOODS';

/**
 * action creators: showGoods
 * @param goodsList
 * @returns {{type: string, goodsData: *}}
 */
export function showGoods(goodsData) {
  let actionData = normalize(goodsData,arrayOf(schemas.goods),{});	
  return {
    type: SHOW_GOODS,
	goodsShow: {entities: actionData.entities, ids: actionData.result}
  }
}
