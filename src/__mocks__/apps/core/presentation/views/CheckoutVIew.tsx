import CheckoutState from "@/apps/core/application/state/checkOutState";
import CheckoutViewModel from "@/apps/core/application/viewmodels/checkoutViewModel";
import TextFieldComponent from "@/lib/components/form/TextFieldComponent";
import React, { FormEvent } from "react";



export default class CheckOutView extends React.Component<any, CheckoutState>{


	private viewModel: CheckoutViewModel;

	constructor(props: any){
		super(props);
		this.state = new CheckoutState();
		this.viewModel = new CheckoutViewModel(this.state, this.setState.bind(this));
	}

	handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		this.viewModel.checkout();
	}

	render(): React.ReactNode {
		
		return (
			<form onSubmit={this.handleSubmit}>

				<TextFieldComponent field={this.state.form.firstName} syncer={this.viewModel.syncState}/>
				<TextFieldComponent field={this.state.form.lastName} syncer={this.viewModel.syncState}/>
				<TextFieldComponent field={this.state.form.address} syncer={this.viewModel.syncState}/>
				<TextFieldComponent field={this.state.form.address2} syncer={this.viewModel.syncState}/>
				<TextFieldComponent field={this.state.form.country} syncer={this.viewModel.syncState}/>
				<button type="submit">Submit</button>

			</form>
		)

	}

	
}