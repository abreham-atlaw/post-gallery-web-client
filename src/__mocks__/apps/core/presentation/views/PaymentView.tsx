import PaymentState from "@/apps/core/application/state/paymentState";
import PaymentViewModel from "@/apps/core/application/viewmodels/paymentViewModel";
import ViewModelView from "@/lib/components/views/ViewModelView";
import { AsyncStatus } from "@/lib/state/asyncState";
import { ReactNode } from "react";
import { useParams } from "react-router-dom";

interface PaymentViewProps{

	orderId: string

}

export default class PaymentView extends ViewModelView<PaymentViewModel, PaymentViewProps, PaymentState>{
	
	onCreateViewModel(state: PaymentState): PaymentViewModel {
		return new PaymentViewModel(state, this.setState.bind(this));
	}
	
	onCreateState(): PaymentState {
		return new PaymentState(this.props.orderId);
	}

	onCreateMain(): ReactNode {
		if(this.state.order?.isPaymentComplete){
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