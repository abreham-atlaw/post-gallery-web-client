import { FireStoreRepository } from "@/lib/repositories/firestoreRepository";
import Order from "../models/order";
import CoreProviders from "../../di/coreproviders";
import OrderSerializer from "../serializers/orderSerializer";
import SerialPkGenerator from "@/lib/repositories/serialPkGenerator";


export default class OrderRepository extends FireStoreRepository<string, Order>{
	
	private primaryKeyGenerator;
	private itemRepository = CoreProviders.provideArtworkRepository();

	constructor(){
		super(
			CoreProviders.provideFirestoreDB(),
			"orders",
			"id",
			new OrderSerializer()
		)
		this.primaryKeyGenerator = new SerialPkGenerator(this, "Or", 5)
	}


	public generateNewPK(instance: Order): Promise<string> {
		return this.primaryKeyGenerator.generateNewPK()
	}
	
	public async attachForeignKeys(instance: Order): Promise<void> {
		instance.item = await this.itemRepository.getByPrimaryKey(instance.itemId)
	}
	
}