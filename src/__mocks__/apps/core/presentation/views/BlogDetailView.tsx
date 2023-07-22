import BlogDetailState from "@/apps/core/application/state/blogDetailState";
import BlogDetailViewModel from "@/apps/core/application/viewmodels/blogDetailViewModel";
import ViewModelView from "@/lib/components/views/ViewModelView";
import { ReactNode } from "react";
import { useParams } from "react-router-dom";



interface BlogDetailProps{
	blogId: string;
}

export default class BlogDetailView extends ViewModelView<BlogDetailViewModel, BlogDetailProps, BlogDetailState>{
	onCreateViewModel(state: BlogDetailState): BlogDetailViewModel {
		return new BlogDetailViewModel(state, this.setState.bind(this));
	}
	onCreateState(): BlogDetailState {
		return new BlogDetailState(this.props.blogId);
	}
	onCreateMain(): ReactNode {
		return (<div>
			
			<h1>{this.state.blog!.title}</h1>

			<img src={this.state.blog!.cover} />
			<iframe
				src={`${this.state.blog?.content}#toolbar=0&navpanes=0&scrollbar=0`}
				className="h-screen"
				height="100%"
				width="100%"
			></iframe>


		</div>)
	}

}


export function RoutedBlogDetailView(){
	let params = useParams();
	return <BlogDetailView blogId={params.id!}/>
}
