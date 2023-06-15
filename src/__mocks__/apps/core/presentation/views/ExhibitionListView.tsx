import ExhibitionListState from "@/apps/core/application/state/exhibitionListState";
import ExhibitionListViewModel from "@/apps/core/application/viewmodels/exhibitionListViewModel";
import Exhibition from "@/apps/core/data/models/exhibition";
import ViewModelView from "@/lib/components/views/ViewModelView";
import { ReactNode, useState } from "react";
import PG from '@/assets/PG.png'
import art from '@/assets/exhibition.png'
import Thefooter from "@/lib/components/footer/footer";



export default class ExhibitionListView extends ViewModelView<ExhibitionListViewModel, any, ExhibitionListState>{
	
	onCreateViewModel(state: ExhibitionListState): ExhibitionListViewModel {
		return new ExhibitionListViewModel(state, this.setState.bind(this));
	}

	onCreateState(): ExhibitionListState {
		return new ExhibitionListState()
	}

	onCreateMain(): ReactNode {
		return (
			<div>
				<div className='hidden lg:flex flex-row items-center justify-between pr-10 pl-20 pt-14 '>
					<div className='flex flex-row items-center space-x-10 text-3xl font-medium leading-none'>
						<img className='h-10' src={PG} />
					</div>
					<div className='flex flex-row items-center space-x-10  text-3xl font-medium leading-none text-black'>
						<a href="/exhibitions">Exhibition</a>
						<a href="/search">Shop</a>
						<a href="/search">Contact</a>
				  </div>

			  	</div>
				<div className="mt-8 mb-12 px-10">
					<div className="w-full flex flex-row items-center justify-center mt-14 mb-8"><p className="pl-8 pr-4 text-2xl text-[#8E8E8E]">CURRENT</p> <LineWithWidth10 /></div>
					{
						this.state.currentExhibitions!.map(
							(exhibition: Exhibition) => {
								return <ExhibitionItem exhibition={exhibition}/>
							}
						)
					}
					<div className="w-full flex flex-row items-center justify-center mt-24 mb-8"><p className="pl-8 pr-4 text-2xl text-[#8E8E8E]">UPCOMING</p> <LineWithWidth10 /></div>
					{
						this.state.upcomingExhibitions!.map(
							(exhibition: Exhibition) => {
								return <ExhibitionItem exhibition={exhibition}/>
							}
						)
					}
				</div>
			</div>
				
		)
	}

}

const LineWithWidth10 = () => {
	return (
	  <div className="w-full border-b-2 border-[#EDEDED]"></div>
	);
  };

interface ExhibitionProps{
	exhibition: Exhibition
}

  const ExhibitionItem = (props: ExhibitionProps) => {
	return (
	  <div className="w-full flex flex-row justify-between px-20">
		<img className="w-5/12 h-min " src={props.exhibition.coverImage} /> 
		<div className="w-5/12">
			<p className="text-5xl">{props.exhibition.name}</p>
			<p className="text-xl text-[#787878] pt-6">{props.exhibition.artist!.fullName}</p>
			<div className="py-2"><LineWithWidth10 /></div>
			<p className="text-xl text-[#787878] mb-4">{props.exhibition.dateRange.startDate.toDateString()} - {props.exhibition.dateRange.startDate.toDateString()}</p>
			<DescriptionComponent description={props.exhibition.description} />
		</div>
	  </div>
	);
  };

  const DescriptionComponent = ({ description }: { description: String }) => {
	const [showMore, setShowMore] = useState(false);
  
	const toggleShowMore = () => {
	  setShowMore(!showMore);
	}
  
	if (description.length <= 370) {
	  return <p className="text-2xl text-[#787878] leading-[28px]">{description}</p>;
	}
  
	if (showMore) {
	  return (
		<div>
		  <p className="text-2xl text-[#787878] leading-[28px]">{description}</p>
		  <button className="btn btn-primary text-2xl font-semibold" onClick={toggleShowMore}>Show Less</button>
		</div>
	  );
	}
  
	return (
	  <div>
		<p className="text-2xl text-[#787878] leading-[28px]">{description.substring(0, 370)}...</p>
		<button className="btn btn-primary text-2xl font-semibold" onClick={toggleShowMore}>Read More</button>
	  </div>
	);
  }


