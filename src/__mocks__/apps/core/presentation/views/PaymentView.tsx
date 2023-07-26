import PaymentState from "@/apps/core/application/state/paymentState";
import ConfirmPaymentViewModel from "@/apps/core/application/viewmodels/paymentViewModel";
import { OrderStatus } from "@/apps/core/data/models/order";
import ViewModelView from "@/lib/components/views/ViewModelView";
import { AsyncStatus } from "@/lib/state/asyncState";
import { ReactNode } from "react";
import { useParams } from "react-router-dom";

interface PaymentViewProps{

	orderId: string

}

export default class PaymentView extends ViewModelView<ConfirmPaymentViewModel, PaymentViewProps, PaymentState>{
	
	onCreateViewModel(state: PaymentState): ConfirmPaymentViewModel {
		return new ConfirmPaymentViewModel(state, this.setState.bind(this));
	}
	
	onCreateState(): PaymentState {
		return new PaymentState(this.props.orderId);
	}

	onCreateMain(): ReactNode {
		if([OrderStatus.complete, OrderStatus.waitingShipment].includes(this.state.order!.status)){
			return <h1>Payment Complete</h1>
		}
		return <div>
			<h1>Sorry, but payment was not complete</h1>
		</div>
	}


}


export function RoutedPaymentView(){
	let params = useParams()
	return <PaymentView orderId={params.orderId!}/>
}