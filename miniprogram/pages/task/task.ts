import { MissionCardItem } from "../focus/focus"

interface PageData {}

interface PageInstance {}

Page<PageData,PageInstance>({
	data:{},
	onLoad: async () => {
		let taskInfo: MissionCardItem;
		const res =  await wx.getStorage({ key: "taskInfo" });
		taskInfo =res && res.data;
		console.log(taskInfo)
	}
})