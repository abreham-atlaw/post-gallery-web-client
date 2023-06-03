import { AsyncState } from "@/lib/state/asyncState";
import CheckoutForm from "../forms/checkoutForm";



export default class CheckoutState extends AsyncState{

	form: CheckoutForm = new CheckoutForm();

}