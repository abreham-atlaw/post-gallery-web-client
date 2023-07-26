import { AsyncState } from "@/lib/state/asyncState"
import BlogForm from "../forms/blogForm"
import Blog from "@/apps/core/data/models/blog";



export default class WriteBlogState extends AsyncState{

	isBlog = true; 
	form: BlogForm = new BlogForm();
	blog?: Blog;
	blogId?: string;

}