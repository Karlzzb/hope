import { Schema, arrayOf } from 'normalizr';


const goodsSchema = new Schema('goods', {idAttribute: 'goods_id'});
const goodsOwnerSchema = new Schema('goodsOwner', {idAttribute: 'owner_id'});
const commentSchema = new Schema('goodsComments', {idAttribute: 'comment_id'});
goodsSchema.define({
	owner:goodsOwnerSchema,
	comments:arrayOf(commentSchema)
});
var allGoodsSchema = {all_goods: arrayOf(goodsSchema)};

export { goodsSchema, goodsOwnerSchema, commentSchema, allGoodsSchema};