import ExhibitionListState from "@/apps/core/application/state/exhibitionListState";
import ExhibitionListViewModel from "@/apps/core/application/viewmodels/exhibitionListViewModel";
import Exhibition from "@/apps/core/data/models/exhibition";
import ViewModelView from "@/lib/components/views/ViewModelView";
import { ReactNode } from "react";




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
				{
					this.state.exhibitions!.map(
						(exhibition: Exhibition) => {
							return (
								<div>
									<h2>{exhibition.name}</h2>
									<p>{exhibition.description}</p>
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