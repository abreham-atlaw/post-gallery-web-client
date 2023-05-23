export default abstract class ViewModel<S>{

	private stateSetter: Function;
	public state: S;


	constructor(state: S, stateSetter: Function){
		this.stateSetter = stateSetter
		this.state = state;
	}

	protected setState(state: S){
		this.stateSetter(state)
		this.state = state;
	}

	protected updateAfter(callback: Function){
		callback()
		this.setState(this.state);
	}

	protected syncState(){
		this.setState(this.state);
	}


}
