import {observable, action} from 'mobx';
import request from 'axios'

const baseURL = 'http://localhost:4000'

// const baseURL = 'http://192.168.31.204:4000'

class AppState {
	
	stateEnum = new Set('upload', 'edit', 'search', 'error')
	
	@observable userState = 'search' // 用户当前状态 搜索|编辑|上传|出错
	@observable viewHistory = [] // 用户的搜索历史
	@observable food = {
		name: '吃啥',
		desc: '随便吃吃',
		imgUrl: 'http://cdn.helloyzy.cn/images/bg2.jpg',
		id: '',
	} // 当前显示food
	@observable picIsLoading = true // 图片是否在加载
	
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
		if (this.viewHistory.length) {
			this.updateFood(this.viewHistory.pop())
		}
	}
	
	@action updateFood(foodInfo) {
		this.food.imgUrl = foodInfo.imgUrl
		this.food.name = foodInfo.name
		this.food.desc = foodInfo.desc
		this.food.id = foodInfo.id
	}
	
	@action getNewFood() {
		this.picIsLoading = true
		this.addNewHistory(
			{
				imgUrl: this.food.imgUrl,
				name: this.food.name,
				desc: this.food.desc,
				id: this.food.id
			}
		)
		return request
			.get(`${baseURL}/food`)
			.then(res => {
				if (res.data.code) return console.error('Get Food Wrong!')
				if (this.food.id === res.data.data.id) this.picIsLoading = false
				this.updateFood(res.data.data)
			})
	}
	
	@action picLoaded() {
		this.picIsLoading = false
	}
}

export default AppState