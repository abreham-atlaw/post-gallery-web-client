import ViewModel from "@/lib/viewmodel/viewmodel";
import OrderListState from "../states/ordersListState";
import CoreProviders from "@/apps/core/di/coreproviders";


export default class OrderListViewModel extends ViewModel<OrderListState>{

	private ordersRepository = CoreProviders.provideOrderRepository()

	public async onInit(): Promise<void> {
		super.onInit();
		this.state.allOrders = await this.ordersRepository.getAll()
		this.state.currentOrders = this.state.allOrders;
	}

}