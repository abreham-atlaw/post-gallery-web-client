import { AsyncState, AsyncStatus } from "@/lib/state/asyncState";
import BaseState from "@/lib/state/baseState";
import React from "react";
import SuccessPopup from "./successPopup";


interface StatusPopupProps{
	asyncState: AsyncState
}


export default class StatusPopup extends React.Component<StatusPopupProps>{
	

	private getLoadingPopup(): React.ReactNode{
		return (
			<h1>Loading</h1>
		)
	}

	private getDonePopup(): React.ReactNode{
		return <SuccessPopup/>
	}

	private getFailedPopup(error: Error): React.ReactNode{
		return (
			<h1>Failed: {error?.message??""}</h1>
		)
	}

	private getPopup(state: AsyncState): React.ReactNode{
		switch(state.status){
			
			case AsyncStatus.none:
				return (<></>)
			
			case AsyncStatus.loading:
				return this.getLoadingPopup()
			
			case AsyncStatus.done:
				return this.getDonePopup()
			
			case AsyncStatus.failed:
				return this.getFailedPopup(state.error)
		}
	}

	render(): React.ReactNode {

		return this.getPopup(this.props.asyncState)

	}

}