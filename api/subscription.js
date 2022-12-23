import request from "@/utils/request.js";

export function breaklist(data) {
	return request.get("breaklist", data, {
		noAuth: true,
		kefu: true
	});
}

//点击预约
export function bookingUserList(data) {
	return request.post("bookingUserList", data, {
		noAuth: true,
		kefu: true
	});
}


//点击种植中
export function joinbreak(data) {
	return request.post("joinbreak", data, {
		noAuth: true,
		kefu: true
	});
}

//获取订单列表
export function breakOrderList(data) {
	return request.post("breakOrderList", data);
}

//预约获取选择活动
export function getSchoolList(data) {
	return request.get("getSchoolList", data, {
		noAuth: true,
		kefu: true
	});
}

//预约获取选择活动
export function getmoney(data) {
	return request.post("getmoney", data, {
		noAuth: true,
		kefu: true
	});
}

//申请
export function booking(data) {
	return request.post("booking", data, {
		noAuth: true,
		kefu: true
	});
}
