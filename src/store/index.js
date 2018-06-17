import {observable, action} from 'mobx';
import request from 'axios'

class AppState {
	
	stateEnum = new Set('upload','edit', 'search', 'error')
	
	@observable userState = 'search' // 用户当前状态 搜索|编辑|上传|出错
	@observable viewHistory = [] // 用户的搜索历史
	
	// 改变用户状态
	@action changeUserState(state) {
		if (this.stateEnum.has(state)) {
			this.userState = state
			return true
		}
		this.userState = 'error'
		return false
	}
	
	// 添加新的食物历史
	@action addNewHistory(foodObject) {
		if (this.viewHistory.length > 10) {
			this.viewHistory.shift()
		}
		this.viewHistory.push(foodObject)
	}
	
	// 查看前一个食物
	@action prevHistory() {
		return this.viewHistory.pop()
	}
	
	@action getNewFood() {
		// TODO 发送请求 写入数组 返回当前数组
	}
	
	
}

export default AppState