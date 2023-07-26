import { FireStoreRepository } from "@/lib/repositories/firestoreRepository";
import Order from "../models/order";
import CoreProviders from "../../di/coreproviders";
import OrderSerializer from "../serializers/orderSerializer";
import SerialPkGenerator from "@/lib/repositories/serialPkGenerator";
import { DBConfigs } from "@/configs/data_configs";


export default class OrderRepository extends FireStoreRepository<string, Order>{
	
	private primaryKeyGenerator;
	private itemRepository = CoreProviders.provideArtworkRepository();
	private shippingInfoRepository = CoreProviders.provideShippingRepository();

	constructor(){
		super(
			CoreProviders.provideFirestoreDB(),
			"orders",
			"id",
			new OrderSerializer()
		)
		this.primaryKeyGenerator = new SerialPkGenerator(this, DBConfigs.PRIMARY_KEY_PREFIX, DBConfigs.PRIMARY_KEY_SERIAL_DIGITS, " - OR")
	}


	public generateNewPK(instance: Order): Promise<string> {
		return this.primaryKeyGenerator.generateNewPK()
	}
	
	public async attachForeignKeys(instance: Order): Promise<void> {
		instance.item = await this.itemRepository.getByPrimaryKey(instance.itemId)
		if(instance.shippingInfoId != null){
			instance.shippingInfo = await this.shippingInfoRepository.getByPrimaryKey(instance.shippingInfoId);
		}
		else{
			instance.shippingInfo = null;
		}
	}
	
}