import ViewModel from "@/lib/viewmodel/viewmodel";
import OrderListState from "../states/ordersListState";
import CoreProviders from "@/apps/core/di/coreproviders";
import OrderRepository from "@/apps/core/data/repositories/orderRepository";
import ArtistRepository from "@/apps/core/data/repositories/artistRepository";


export default class OrderListViewModel extends ViewModel<OrderListState>{

	private ordersRepository = new OrderRepository();
	private artistRepository = new ArtistRepository();

	public async onInit(): Promise<void> {
		await super.onInit();
		this.state.allOrders = await this.ordersRepository.getAll()
		this.state.currentOrders = this.state.allOrders;
	}

	protected isReady(): boolean {
		return true;
	}

}