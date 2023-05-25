import EmailVerificationViewModel from "@/apps/auth/application/viewmodels/emailVerificationViewModel";

import { AsyncState, AsyncStatus } from "@/lib/state/asyncState";
import React from "react";



export class EmailVerificationView extends React.Component<any, AsyncState>{

	
	private viewModel: EmailVerificationViewModel;

	constructor(props: any){
		super(props);
		this.state = new AsyncState();
		this.viewModel = new EmailVerificationViewModel(this.state, this.setState.bind(this))
	}

	componentDidMount(): void {
		this.viewModel.sendEmail()
	}
	
	render(): React.ReactNode {
		let emailSendStatusMessageMap: Map<AsyncStatus, string> = new Map([
			[AsyncStatus.none, "None"],
			[AsyncStatus.loading, "Sending..."],
			[AsyncStatus.done, "Sent"],
			[AsyncStatus.failed, "Failed to send"]
		])
		return (
			<div>
				{emailSendStatusMessageMap.get(this.state.status)}
				An email has been sent to your account verify it.
				<button onClick={() => {this.viewModel.sendEmail()}}>Resend</button>
			</div>
			
		)
	}

	
}