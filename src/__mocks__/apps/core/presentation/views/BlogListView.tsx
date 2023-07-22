import BlogListState from "@/apps/core/application/state/blogListState";
import BlogListViewModel from "@/apps/core/application/viewmodels/blogListViewModel";
import Blog from "@/apps/core/data/models/blog";
import ViewModelView from "@/lib/components/views/ViewModelView"
import { ReactNode } from "react";
import { Link } from "react-router-dom";



export default class BlogListView extends ViewModelView<BlogListViewModel, any, BlogListState>{
	
	onCreateViewModel(state: BlogListState): BlogListViewModel {
		return new BlogListViewModel(state, this.setState.bind(this));
	}
	
	onCreateState(): BlogListState {
		return new BlogListState();
	}

	onCreateMain(): ReactNode {

		return (
			this.state.blogs!.map((blog: Blog) => <Link to={`/blog/${blog.getPK()}/`} className="border border-dark">
				<img src={blog.cover}/>
				<h2>{ blog.title }</h2>
			</Link>)
		)
		
	}

}