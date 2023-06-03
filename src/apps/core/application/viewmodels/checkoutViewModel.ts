import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import CheckoutState from "../state/checkOutState";



export default class CheckoutViewModel extends AsyncViewModel<CheckoutState>{


	public async checkout(){
		this.asyncCall(
			() => {
				//Will Implement this after chapa integration...
			}
		)
	}

}