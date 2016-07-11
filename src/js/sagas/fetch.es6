/**
 * Created by yvan on 16/7/10.
 */
import { call, put, take, fork, cancel, race } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import fetch from 'isomorphic-fetch'
import { fetchAN } from './../actions/fetch'
import { appAN } from './../actions/app'

export function getData(url) {
	return fetch(url).then(response => response.json())
}

export function* fetchData(action) {
	try {
		const data = yield call(getData,action.url);
		yield put({type: fetchAN.FETCH_SUCCEED, data});
		if(action.successAction) {
			console.log("============request data==============");
			console.log(data);
			yield put({type: action.successAction, data});
		}
		if(action.showInfo) { //显示成功信息
			yield put({
				type: appAN.SET_INFO,
				value: true,
				msg: "请求成功"
			});
		}
	} catch (error) {
		yield put({type: fetchAN.FETCH_FAILED, error: error.toString()});
		yield put({ //弹出请求失败提示
			type: appAN.SET_INFO,
			value: true,
			msg: "请求失败:"+error.toString(),
			style: "danger"
		});
	}
}

function* fetchDataSaga() {
	yield takeLatest( fetchAN.FETCH_REQUEST, fetchData)
}

export default function* sagaFetch() {
	yield fetchDataSaga()
}