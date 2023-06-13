import OrderListState from "@/apps/admin/application/states/ordersListState";
import OrderListViewModel from "@/apps/admin/application/viewmodels/ordersListViewModel";
import Order from "@/apps/core/data/models/order";
import ViewModelView from "@/lib/components/views/ViewModelView";
import { ReactNode } from "react";


export default class OrderListView extends ViewModelView<OrderListViewModel, any, OrderListState>{
	
	onCreateViewModel(state: OrderListState): OrderListViewModel {
		return new OrderListViewModel(state, this.setState.bind(this))
	}
	
	onCreateState(): OrderListState {
		return new OrderListState()
	}

	onCreateMain(): ReactNode {
		return <div>
			<table>
				<thead>
					<tr>
						<td>Artwork</td>
						<td>Status</td>
						<td>Artist</td>
						<td>Date</td>
						<td>Price</td>
					</tr>
				</thead>
					
				<tbody>
					{
						this.state.currentOrders!.map(
							(order: Order, _index: number) => {
								return <tr>
									<td>{order.item!.name}</td>
									<td>{order.isPaymentComplete?"complete":"incomplete"}</td>
									<td>{order.item!.artist?.fullName}</td>
									<td>{order.orderDateTime.toDateString()}</td>
									<td>{order.item!.price}</td>
								</tr>
							}
						)
					}
				</tbody>
			</table>
			
		</div>
	}

}