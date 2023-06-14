import WriteExhibitionState from "@/apps/admin/application/states/writeExhibitionState";
import EditExhibitionViewModel from "@/apps/admin/application/viewmodels/editExhibitionViewModel";
import DateFieldComponent from "@/lib/components/form/DateFieldComponent";
import NumberFieldComponent from "@/lib/components/form/NumberFieldComponent";
import TextFieldComponent from "@/lib/components/form/TextFieldComponent";
import StatusToast from "@/lib/components/status/StatusToast";
import ViewModelView from "@/lib/components/views/ViewModelView";
import { AsyncStatus } from "@/lib/state/asyncState";
import { FormEvent, ReactNode } from "react";




export default abstract class WriteExhibitionView<P> extends ViewModelView<EditExhibitionViewModel, P,  WriteExhibitionState>{
	
	onCreateViewModel(state: WriteExhibitionState): EditExhibitionViewModel {
		return new EditExhibitionViewModel(state, this.setState.bind(this));
	}

	onCreateState(): WriteExhibitionState {
		return new WriteExhibitionState();
	}

	private handleSubmit = async (event: FormEvent) => {
		event.preventDefault()
		await this.getViewModel().save();
	}


	onCreateMain(): ReactNode {
		if(this.state.status === AsyncStatus.done){
			return (
				<h1>Successfully created a new Exhibition: {this.state.exhibition!.id}. {this.state.exhibition!.name}</h1>
			)
		}
		return (
			<div>
				<StatusToast asyncState={this.state} errorText={this.state.error?.message}/>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label htmlFor="artistId">Artist ID:</label>
						<TextFieldComponent field={this.state.form.artistId} syncer={this.getViewModel().syncState} />
					</div>
					<div>
						<label htmlFor="name">Name:</label>
						<TextFieldComponent field={this.state.form.name} syncer={this.getViewModel().syncState} />
					</div>
					<div>
						<label htmlFor="description">Description:</label>
						<TextFieldComponent field={this.state.form.description} syncer={this.getViewModel().syncState} />
					</div>
					<div>
						<label htmlFor="curator">Curator:</label>
						<TextFieldComponent field={this.state.form.curator} syncer={this.getViewModel().syncState} />
					</div>
					<div>
						<label htmlFor="venue">Venue:</label>
						<TextFieldComponent field={this.state.form.venue} syncer={this.getViewModel().syncState} />
					</div>
					<div>
						<label htmlFor="startDate">Start Date:</label>
						<DateFieldComponent field={this.state.form.startDate} syncer={this.getViewModel().syncState} />
					</div>
					<div>
						<label htmlFor="endDate">End Date:</label>
						<DateFieldComponent field={this.state.form.endDate} syncer={this.getViewModel().syncState} />
					</div>
					<div>
						<label htmlFor="startTime">Start Time:</label>
						<NumberFieldComponent field={this.state.form.startTime} syncer={this.getViewModel().syncState} />
					</div>
					<div>
						<label htmlFor="endTime">End Time:</label>
						<NumberFieldComponent field={this.state.form.endTime} syncer={this.getViewModel().syncState} />
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}



}