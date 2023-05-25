import { Field } from "./fields.ts";


export default abstract class Form{

	
	abstract getFields(): Array<Field<any>>


	public validate(throw_error: boolean = false): boolean{

		let valid = true;
		this.getFields().forEach(
			function (field: Field<any>){
				if(!field.isValid()){
					valid = false;
				}
			}
		)
		if(throw_error && !valid){
			throw new ValidationException();
		}
		return valid;

	}

}

class ValidationException extends Error{

}