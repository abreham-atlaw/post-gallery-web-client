

export enum AsyncStatus{
	none = 0, 
	loading = 1,
	done = 2,
	failed = 3
}

export class AsyncState {

	public status: AsyncStatus;
	public error: Error;

	constructor(status: AsyncStatus = AsyncStatus.none, error: any = null){
		this.status = status;
		this.error = error;
	}

}
