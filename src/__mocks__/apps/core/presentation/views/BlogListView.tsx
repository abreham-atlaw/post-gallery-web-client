import TheFooter from '@/lib/components/footer/footer'
import NavBar from '@/lib/components/navBar/navBar'
import collection from "@/assets/about.png"
import BlogListState from "@/apps/core/application/state/blogListState";
import BlogListViewModel from "@/apps/core/application/viewmodels/blogListViewModel";
import Blog, { PublishmentType } from "@/apps/core/data/models/publishment";
import ViewModelView from "@/lib/components/views/ViewModelView"
import { ReactNode } from "react";
import { Link } from "react-router-dom";


interface PublishmentListViewProps{

	type: PublishmentType

}

export default class PublishmentListView extends ViewModelView<BlogListViewModel, PublishmentListViewProps, BlogListState>{
	
	TITLE_PUBLISHMENT_TYPE_MAPS = [
		"Blogs",
		"Presses",
		"Projects",
		"Art Fair"
	]

	onCreateViewModel(state: BlogListState): BlogListViewModel {
		return new BlogListViewModel(state, this.setState.bind(this));
	}
	
	onCreateState(): BlogListState {
		return new BlogListState(this.props.type);
	}

	onCreateMain(): ReactNode {

		return (
			<div>
				<div className='lg:pr-10 lg:pl-16 '>
					<NavBar isDark={true} />
				</div>
		
				<div className="max-w-[1280px] m-auto px-6 lg:p-4 lg:px-16 font-Lato lg:mb-6">
					<p className='mt-3 mb-5 lg:mb-10 text-2xl lg:text-4xl font-Lato'>{this.TITLE_PUBLISHMENT_TYPE_MAPS[this.state.publishmentType]}</p>
					<div className='flex flex-col lg:flex-row justify-between'>
						{
							this.state.blogs!.map(
								(blog: Blog) => {
									return (<Link to={`/publishment/${blog.getPK()}`} className='w-full lg:w-1/2 flex flex-col lg:mr-12'>
									<img className='w-full h-52 lg:h-96 shadow-md object-cover lg:object-cover' src={blog.cover} />
									<p className='text-xl lg:text-4xl mt-2 lg:my-4'>{blog.title}</p>
								</Link>
								)
								}
							)
						}
					</div>
				</div>
		
				<TheFooter />
			</div>
		  )
		
	}

}
