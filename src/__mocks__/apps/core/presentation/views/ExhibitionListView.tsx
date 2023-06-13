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
					<ExhibitionItem />
				</div>
				{
					this.state.exhibitions!.map(
						(exhibition: Exhibition) => {
							return (
								<div>
									<h2>{exhibition.name}</h2>
									<p>{exhibition.description}</p>
									<p>{exhibition.artistId}</p>
									<hr/>
								</div>
							)
						}
					)
				}
			</div>
		)
	}

}

const LineWithWidth10 = () => {
	return (
	  <div className="w-full border-b border-[#8E8E8E]"></div>
	);
  };

  const ExhibitionItem = () => {
	return (
	  <div className="w-full flex flex-row justify-between">
		<img className="w-5/12" src={art} /> 
		<div className="w-1/2">
			<p className="text-5xl">SPIRIT OF AN ART</p>
			<p className="text-xl text-[#787878]">ALEMAYEHU ZEWDIE</p>
			<LineWithWidth10 />
			<p className="text-xl text-[#787878]">ALEMAYEHU ZEWDIE</p>
			<p className="text-2xl text-[#787878]">Feminine art is a form of art that is created by women or focuses on women's experiences, perspectives, and issues. It is a diverse and multifaceted genre that encompasses a wide range of styles, techniques, and subject matter. Feminine art often explores themes such as gender identity, sexuality, motherhood, domesticity, body image, and social and political inequalities. Feminine art can be expressed through various mediums such as painting, sculpture, photography, performance art, and installation art. </p>
		</div>
	  </div>
	);
  };