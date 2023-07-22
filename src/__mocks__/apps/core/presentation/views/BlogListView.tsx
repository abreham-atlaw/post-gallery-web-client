import TheFooter from '@/lib/components/footer/footer'
import NavBar from '@/lib/components/navBar/navBar'
import collection from "@/assets/about.png"
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
			<div>
				<div className='lg:pr-10 lg:pl-16 '>
					<NavBar isDark={true} />
				</div>
		
				<div className="max-w-[1280px] m-auto px-6 lg:p-4 lg:px-16 font-Mulish lg:mb-6">
					<p className='mt-3 mb-5 lg:mb-10 text-2xl lg:text-4xl font-Mulish'>Blogs</p>
					<div className='flex flex-col lg:flex-row justify-between'>
						<Link to="/blog/PG - 00001 - BG" className='w-full lg:w-1/2 flex flex-col lg:mr-12'>
							<img className='w-full h-52 lg:h-96 shadow-md object-cover lg:object-cover' src={collection} />
							<p className='text-xl lg:text-4xl mt-2 lg:my-4'>New virtual gallery exhibition</p>
							<p className='font-light text-sm lg:text-xl text-[#545454]'>Virtual gallery, July 14 2023</p>
						</Link>
						
						<Link to="/blog/PG - 00001 - BG" className='w-full lg:w-1/2 flex flex-col mt-10 lg:mt-0'>
							<img className='w-full h-52 lg:h-96 shadow-md object-cover lg:object-cover' src={collection} />
							<p className='text-xl lg:text-4xl mt-2 lg:my-4'>New virtual gallery exhibition</p>
							<p className='font-light text-sm lg:text-xl text-[#545454]'>Virtual gallery, July 14 2023</p>
						</Link>
					</div>
				</div>
		
				<TheFooter />
			</div>
		  )
		
	}

}
