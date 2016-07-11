/**
 * Created by yvan on 16/7/10.
 */

export const fetchAN = {
	FETCH_REQUEST : "fetch/REQUEST",
	FETCH_SUCCEED : "fetch/SUCCEED",
	FETCH_FAILED : "fetch/FAILED",
};

const action = (type, payload = {}) => ({
	type,
	...payload
});

export const fetchData = data => action(fetchAN.FETCH_REQUEST,data);