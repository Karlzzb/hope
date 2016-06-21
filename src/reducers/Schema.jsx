import { Record, List, Map } from 'immutable';
import { Schema, arrayOf } from 'normalizr-immutable';

const owner = new Record({
    owner_id: 0,
    owner_name: ''
});

const comment = new Record({
    comment_id: 0,
    content: '',
    rating: 5
});

const goods = new Record({
    goods_id: null,
    goods_name: '',
	description: '',
    goods_imags: new List(),
	class_ids: new List(),
    goods_prices:'',
    goods_front_img:'',
    publish_at: '2016-01-07T23:00:02.248z',
    owner: new owner(),
    comments: new List()
});



const schemas = {
    goods: new Schema('goods', goods, {idAttribute: 'goods_id'}),
    owner: new Schema('goodsOwner', owner, {idAttribute: 'owner_id'}),
    comment: new Schema('goodsComments', comment, {idAttribute: 'comment_id'})
};

schemas.goods.define({
    owner: schemas.owner,
    comments: arrayOf(schemas.comment)
});


export { schemas };
