import { MissionCardItem } from "../focus/focus"

interface TaskItem{
	TaskItemId: String;
	title: String;
	duration: Number
}

interface PageData {
	list: TaskItem[];
}

interface PageInstance {}

Page<PageData,PageInstance>({
	data:{
		list: []
	},
	onLoad: async () => {
		let taskInfo: MissionCardItem;
		const res =  await wx.getStorage({ key: "taskInfo" });
		taskInfo =res && JSON.parse(res.data);
		console.log(taskInfo);
		// 通过事项类型请求后端，获取list
		
	}
})