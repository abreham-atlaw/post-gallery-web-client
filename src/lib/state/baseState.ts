import { AsyncStatus } from "./asyncState";


export default class BaseState{

	public context: Record<string, any>;
	public initState = {
		status: AsyncStatus.loading,
		error: null,
	};

	constructor(context?: object){
		if(context === undefined){
			context = {}
		}
		this.context = context;
	}

} 