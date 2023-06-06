import CoreProviders from "@/apps/core/di/coreproviders";
import BaseState from "../state/baseState";
import ContextInjector from "./contextInjector";
import { FunctionalAsyncHandler } from "./asyncViewModel";


export default abstract class ViewModel<S extends BaseState>{

	private stateSetter: Function;
	public state: S;
	private injectors: ContextInjector[];


	constructor(state: S, stateSetter: Function, injectors?: ContextInjector[]){
		this.stateSetter = stateSetter
		this.state = state;
		if(injectors === undefined){
			injectors = CoreProviders.provideDefaultInjectors()
		}
		this.injectors = injectors;
	}

	public async onInit(){
		
		let initHandler = new FunctionalAsyncHandler<BaseState>(
			this,
			async () => {
				for(let injector of this.injectors){
					await injector.inject(this.state.context, this)
					this.syncState()
				}
			},
			undefined,
			undefined,
			undefined,
			() => {return this.state.initState}
		)
		await initHandler.handle({});

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
