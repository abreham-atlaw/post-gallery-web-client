export default abstract class ViewModel<S>{

	private stateSetter: Function;
	public state: S;


	constructor(state: S, stateSetter: Function){
		this.stateSetter = stateSetter
		this.state = state;
	}

	public setState(state: S){
		this.stateSetter(state)
		this.state = state;
	}

	public updateAfter(callback: Function){
		callback()
		this.setState(this.state);
	}

	public syncState(){
		this.setState(this.state);
	}

}
