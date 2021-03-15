enum MissionType {
	Work,
	Study,
	Write,
	Chat,
	Motion,
	Think
}

interface MissionCardItem {
	id: Number;
	iconPath: String;
	name: String;
	type: MissionType;
}

interface PageData {
	typeList: MissionCardItem[];
}

interface PageInstance {
	onMyEvent: (e: any) => any;
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
	onMyEvent: function(e:any){
		// e.detail // 自定义组件触发事件时提供的detail对象
		console.log(e)
	  }
})