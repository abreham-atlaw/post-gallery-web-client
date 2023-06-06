import BaseState from "@/lib/state/baseState";
import ViewModel from "@/lib/viewmodel/viewmodel";
import React from "react";



export default abstract class ViewModelView<V extends ViewModel<S>, P = {}, S extends BaseState = BaseState, SS=any> extends React.Component<P, S, SS>{
	
	private viewModel?: V

	constructor(props: P){
		super(props);
		this.state = this.onCreateState()
		this.viewModel = this.onCreateViewModel(this.state)
	}


	protected getViewModel(): V{
		return this.viewModel!
	}

	abstract onCreateViewModel(state: S): V

	abstract onCreateState(): S


	componentDidMount(): void {
		this.getViewModel().onInit()
	}

}