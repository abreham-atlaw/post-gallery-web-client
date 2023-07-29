import { AsyncState } from "@/lib/state/asyncState";
import Blog, { PublishmentType } from "../../data/models/publishment";



export default class BlogListState extends AsyncState{

	blogs?: Blog[]

	publishmentType: PublishmentType;

	constructor(publishmentType: PublishmentType){
		super();
		this.publishmentType = publishmentType;
	}

}