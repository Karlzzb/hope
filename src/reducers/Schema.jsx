import { Record, List, Map } from 'immutable';
import { Schema, arrayOf } from 'normalizr-immutable';

const goods = new Record({
    goods_id: 0,
    goods_name:'',
    goods_imags: new List(),
    goods_prices:'',
    goods_front_img:'',
    publish_at: '2016-01-07T23:00:02.248z',
    owner: new Owner({]}),
    comments: new List()
});

const owner = new Record({
    owner_id: 0,
    owner_name: ''
});

const comment = new Record({
    com_id: 0,
    content: '',
    rating: 5,
    user_id: 1,
    user_nickname: ''
});

const showGoods = new Record({
    show_goods: new List()
});

const schemas = {
    goods: new Schema('goods', goods),
    owner: new Schema('goodsOwner', owner),
    comment: new Schema('goodsComments', comment),
    showGoods:  new Schema('showGoods', showGoods)
};

schemas.goods.define({
    owner:schemas.owner,
    comments:arrayOf(schemas.comment)
});

schemas.showGoods.define({
   show_goods: arrayOf(schemas.goods)
});

export { schemas };
