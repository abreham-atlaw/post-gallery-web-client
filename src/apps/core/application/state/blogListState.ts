import { AsyncState } from "@/lib/state/asyncState";
import Blog from "../../data/models/publishment";



export default class BlogListState extends AsyncState{

	blogs?: Blog[]

}