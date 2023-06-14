import ExhibitionListState from "@/apps/core/application/state/exhibitionListState";
import ExhibitionListViewModel from "@/apps/core/application/viewmodels/exhibitionListViewModel";
import Exhibition from "@/apps/core/data/models/exhibition";
import ViewModelView from "@/lib/components/views/ViewModelView";
import { ReactNode } from "react";
import PG from '@/assets/PG.png'
import art from '@/assets/exhibition.png'



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
				<div className='hidden lg:flex flex-row items-center justify-between px-10 pt-10 '>
					<div className='flex flex-row items-center space-x-10 text-3xl font-medium leading-none'>
						<img className='h-8' src={PG} />
					</div>
					<div className='flex flex-row items-center space-x-10  text-3xl font-medium leading-none text-black'>
						<a href="/exhibitions">Exhibition</a>
						<a href="/search">Shop</a>
						<a href="/search">Contact</a>
						<a href="/search">About</a>

				  </div>

			  	</div>
				<div className="my-8 px-10">
					<div className="w-full flex flex-row items-center justify-center"><p className=" pr-4 text-2xl text-[#8E8E8E]">CURRENT</p> <LineWithWidth10 /></div>
					{
					this.state.currentExhibitions!.map(
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
	  <div className="w-full border-b border-[#8E8E8E]"></div>
	);
  };

interface ExhibitionProps{
	exhibition: Exhibition
}

  const ExhibitionItem = (props: ExhibitionProps) => {
	return (
	  <div className="w-full flex flex-row justify-between">
		<img className="w-5/12" src={props.exhibition.coverImage} /> 
		<div className="w-1/2">
			<p className="text-5xl uppercase">{props.exhibition.name}</p>
			<p className="text-xl text-[#787878] uppercase">{props.exhibition.artist?.fullName}</p>
			<LineWithWidth10 />
			<p className="text-xl text-[#787878] uppercase">{props.exhibition.dateRange.startDate.toDateString()} - {props.exhibition.dateRange.endDate.toDateString()}</p>
			<p className="text-2xl text-[#787878]">{props.exhibition.description }</p>
		</div>
	  </div>
	);
  };