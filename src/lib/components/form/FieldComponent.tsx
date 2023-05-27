import Field from "@/lib/forms/fields";
import React from "react";


export interface FieldComponentProps<T>{

	field: Field<T>
	syncer?: Function
	onChanged: Function
}

export abstract class FieldComponent<T> extends React.Component<FieldComponentProps<T>>{

	private sync?: Function
	private externalOnChanged?: Function

	constructor(props: FieldComponentProps<T>){
		super(props);
		this.state = {
			field: props.field
		}
		this.sync = props.syncer
		this.externalOnChanged = props.onChanged
	}

	protected getField(): Field<T>{
		return this.props.field;
	}

	private onChange = async (value: T) => {
		await this.getField().setValue(value);
		this.setState({
			field: this.getField()
		})
		if(this.sync != undefined){
			this.sync();
		}
		if(this.externalOnChanged != undefined){
			this.externalOnChanged(value)
		}
	}

	protected abstract constructInputNode(value: T|null, callback: Function): React.ReactNode

	protected constructErrorTextNode(value: T | null, error: string | null): React.ReactNode{
		return (
			<p>{String(value)} is not a valid value. Error: {error}</p>
		)
	}
	render(): React.ReactNode {
		return(
			<div>
			{this.constructInputNode(this.getField().getValue(), this.onChange)}
			{
				(this.getField().error != null)?this.constructErrorTextNode(this.getField().getValue(), this.getField().error):<></>
			}
			</div>
		)
	}

}