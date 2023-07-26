import OrderDetailState from "@/apps/admin/application/states/orderDetailState";
import OrderDetailViewModel from "@/apps/admin/application/viewmodels/orderDetailViewModel";
import { OrderStatus } from "@/apps/core/data/models/order";
import OrderSerializer from "@/apps/core/data/serializers/orderSerializer";
import ViewModelView from "@/lib/components/views/ViewModelView";
import { ReactNode } from "react";
import { useParams } from "react-router-dom";



interface OrderDetailViewProps{
	orderId: string;
}


export default class OrderDetailView extends ViewModelView<OrderDetailViewModel, OrderDetailViewProps, OrderDetailState>{
	
	onCreateViewModel(state: OrderDetailState): OrderDetailViewModel {
		return new OrderDetailViewModel(state, this.setState.bind(this));
	}
	
	onCreateState(): OrderDetailState {
		return new OrderDetailState(this.props.orderId);
	}


	onCreateMain(): ReactNode {
		return (<div>
			<ul>
				<li>{this.state.order!.item!.name}</li>
				<li>{OrderStatus[this.state.order!.status]}</li>
			</ul>
			

			<button onClick={() => {this.getViewModel().acceptRequest()}}>Accept request</button>
			<button onClick={() => {this.getViewModel().rejectRequest()}}>Reject request</button>
		</div>)
	}

}


export function RoutedOrderDetailView(){
	let params = useParams();
	return <OrderDetailView orderId={params.id!}/>
}