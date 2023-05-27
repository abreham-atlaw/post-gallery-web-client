import SearchState from "@/apps/core/application/state/searchState";
import SearchViewModel from "@/apps/core/application/viewmodels/searchViewModel";
import TextFieldComponent from "@/lib/components/form/TextFieldComponent";
import { AsyncStatus } from "@/lib/state/asyncState";
import React from "react";




export default class SearchView extends React.Component<any, SearchState>{

	private searchViewModel: SearchViewModel

	constructor(props: any){
		super(props)
		this.state = new SearchState()
		this.searchViewModel = new SearchViewModel(this.state, this.setState.bind(this))
	}

	handleChange = () => {
		this.searchViewModel.searchId()
	}

	render(): React.ReactNode {
		if(this.state.result != undefined){
			return <h1>Item found {new String(this.state.result!.name)}</h1>
		}
		return (
			<div>
				Search:
				<TextFieldComponent 
				field={this.state.idField} 
				syncer={this.searchViewModel.syncState}
				onChanged={this.handleChange}/>
				{	
					(this.state.status === AsyncStatus.loading)?
					(<p>Searching....</p>):
					(this.state.status === AsyncStatus.failed)?
					(<p>{this.state.idField.getValue()} Not Found</p>):
					<></>
				}

			</div>
		)
	}
	
}