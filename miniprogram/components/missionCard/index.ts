import { Props, MissionType } from "./types";

Component<{}, Props, {}>({
	properties: {
		item: {
			id: 0,
			icon: "",
			name: "",
			type: MissionType.Work
		}
	},
	methods: {
		handleClick: function() {
			console.log(this.properties)
			console.log(this.properties.item)
			console.log(this.properties.item.type)
		}
	}
})