import { AsyncState } from "@/lib/state/asyncState";
import Blog from "../../data/models/blog";



export default class BlogListState extends AsyncState{

	blogs?: Blog[]

}