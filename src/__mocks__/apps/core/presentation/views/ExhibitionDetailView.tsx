import ExhibitionDetailState from "@/apps/core/application/state/exhibitionDetailState";
import ExhibitionDetailViewModel from "@/apps/core/application/viewmodels/exhibitionDetailViewModel";
import ViewModelView from "@/lib/components/views/ViewModelView";
import { ReactNode } from "react";
import { useParams } from "react-router-dom";


interface ExhibitionDetailViewProps{
	exhibitionID: string
}

export default class ExhibitionDetailView extends ViewModelView<ExhibitionDetailViewModel, ExhibitionDetailViewProps,  ExhibitionDetailState>{
	
	onCreateViewModel(state: ExhibitionDetailState): ExhibitionDetailViewModel {
		return new ExhibitionDetailViewModel(state, this.setState.bind(this));
	}
	onCreateState(): ExhibitionDetailState {
		return new ExhibitionDetailState(this.props.exhibitionID)
	}

	onCreateMain(): ReactNode {
		return (
			<div>
				{this.state.exhibiton!.name}<br/>
				{this.state.exhibiton!.venue}
			</div>
		)
	}


}


export function RoutedExhibitionDetailView(){
	let params = useParams();
	return <ExhibitionDetailView exhibitionID={params.id!}/>

}