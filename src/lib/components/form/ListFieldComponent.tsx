import React, { ReactNode } from "react";
import { FieldComponent, FieldComponentProps } from "./FieldComponent";
import Field, { ListField } from "@/lib/forms/fields";



interface ListFieldComponentProps<T> extends FieldComponentProps<(T|null)[]>{

	generator: (field: Field<T>) => React.ReactNode

}


export default class ListFieldComponent<T> extends FieldComponent<(T|null)[], ListFieldComponentProps<T>>{

	private remove(index: number){
		(this.getField() as ListField<T>).pop(index);
	}
	
	private add(){
		(this.getField() as ListField<T>).add();
	}

	componentDidMount(): void {
		let field = (this.getField() as ListField<T>);
		if(field.getFields().length === 0){
			field.add();
		}
		this.setState(this.state)
	}

	protected constructInputNode(_values: (T|null)[] | null, _callback: Function): ReactNode {

		return (
			<div>
				<ul>
					{
					(this.getField() as ListField<T>).getFields().map(
						(field: Field<T>, index: number) => {
							return (
								<li>
									<div>
										{this.props.generator(field)}
										<button onClick={() => {this.remove(index)}}>Remove</button>
									</div>
								</li>
							);
						})
					}
				</ul>
				<button onClick={() => {this.add()}}>Add</button>
			</div>
		)
	}



} 