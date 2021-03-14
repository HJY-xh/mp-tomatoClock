Page({
	data:{
		typeList:[
			{
				icon: "a123",
				name: "a456",
				type: "a789"
			},
			{
				icon: "b123",
				name: "b456",
				type: "b789"
			}
		]
	},
	onMyEvent: function(e:any){
		// e.detail // 自定义组件触发事件时提供的detail对象
		console.log(e)
	  }
})