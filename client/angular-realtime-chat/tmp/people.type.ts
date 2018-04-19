export interface People
{
	name : string;
	id : number;
	resource_id : number;
	image : string;
	status : string;
	messages ? : Array<any>;
	unread_message_count ? : number;
}