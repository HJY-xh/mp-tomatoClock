
export enum MissionType {
	Work,
	Study,
	Write,
	Chat,
	Motion,
	Think
}

export interface MissionCardItem {
	id: Number;
	icon: String;
	name: String;
	type: MissionType;
}

export interface Props {
	item: MissionCardItem;
}
