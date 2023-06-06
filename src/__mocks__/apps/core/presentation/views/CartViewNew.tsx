import CartViewModel from "@/apps/core/application/viewmodels/cartViewModel";
import ViewModelView from "@/lib/components/views/ViewModelView";
import { AsyncStatus } from "@/lib/state/asyncState";
import BaseState from "@/lib/state/baseState";
import { ReactNode } from "react";



export default class CartView extends ViewModelView<CartViewModel>{
	
	
	onCreateViewModel(state: BaseState): CartViewModel {
		return new CartViewModel(state, this.setState.bind(this));
	}
	onCreateState(): BaseState {
		return new BaseState();
	}

	render(): ReactNode {

		if(this.state.initState.status === AsyncStatus.loading || this.state.initState.status === AsyncStatus.none){
			return "Loading Client...."
		}

		return (
			<div>
				{
					this.state.context.client.cart.items
				}
			</div>
		)


	}

}