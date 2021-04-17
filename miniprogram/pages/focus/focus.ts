enum MissionType {
	Work,
	Study,
	Write,
	Chat,
	Motion,
	Think
}

export interface MissionCardItem {
	id: Number;
	iconPath: String;
	name: String;
	type: MissionType;
}

interface PageData {
	typeList: MissionCardItem[];
}

interface PageInstance {
	handleOpenTask: (e: any) => void;
}

Page<PageData, PageInstance>({
	data:{
		typeList:[
			{
				id: 0,
				iconPath: "/assets/MissionType/Work.png",
				name: "工作",
				type: MissionType.Work
			},
			{
				id: 1,
				iconPath: "/assets/MissionType/Study.png",
				name: "学习",
				type: MissionType.Study
			},
			{
				id: 2,
				iconPath: "/assets/MissionType/Write.png",
				name: "写作",
				type: MissionType.Write
			},
			{
				id: 3,
				iconPath: "/assets/MissionType/Chat.png",
				name: "聊天",
				type: MissionType.Chat
			},
			{
				id: 4,
				iconPath: "/assets/MissionType/Motion.png",
				name: "运动",
				type: MissionType.Motion
			},
			{
				id: 5,
				iconPath: "/assets/MissionType/Think.png",
				name: "思考",
				type: MissionType.Think
			}
		]
	},
	handleOpenTask: (e: any) => {
		const taskInfo: MissionCardItem = e.currentTarget.dataset;
		wx.setStorage({
			key: "taskInfo",
			data: JSON.stringify(taskInfo),
			success: () => {
				wx.navigateTo({
					url: "../task/task",
				})
			}
		})
	},
	onLoad:async ()=>{
		wx.login({
			success (res) {
				console.log(res,111111111111)
			  if (res.code) {
				//发起网络请求
				wx.request({
				  url: 'http://127.0.0.1:4000/login',
				  method: "POST",
				  data: {
					code: res.code
				  },
				  success(res) {
					  console.log(res)
				  }
				})
			  } else {
				console.log('登录失败！' + res.errMsg)
			  }
			}
		  })
	}
})