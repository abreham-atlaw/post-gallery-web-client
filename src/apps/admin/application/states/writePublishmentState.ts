import { AsyncState } from "@/lib/state/asyncState"
import PublishmentForm from "../forms/publishmentForm"
import Publishment from "@/apps/core/data/models/publishment";



export default class WritePublishmentState extends AsyncState{

	form: PublishmentForm = new PublishmentForm();
	publishment?: Publishment;
	publishmentId?: string;

}