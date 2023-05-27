export class Field<T>{

	public value :T | null = null;
	public error : string | null = null;
	public required: boolean;
	public validator: Function | null;
	private liveValidate: boolean;

	constructor(required: boolean = true, validator: Function|null = null, liveValidate: boolean = true){
		this.required = required;
		this.validator = validator;
		this.liveValidate = liveValidate
	}

	public isValid(): boolean{
		this.error = this.validate();
		if(this.error === null){
			return true;
		}
		return false
	}

	protected validate(): string | null{
		if(this.required && this.getValue() === null){
			return "This field is required";
		}
		if(this.validator != null){
			return this.validator(this.getValue())
		}
		return null;
	}

	public getValue(): T | null{
		return this.value;
	}

	public setValue(value: T|null){
		this.value = value;
		if(this.liveValidate){
			this.isValid()
		}
	}

}

export class TextField extends Field<string>{

	private emptyAsNull: boolean;
	constructor(
		required: boolean = true, 
		validator: Function|null = null, 
		liveValidate: boolean = true,
		emptyAsNull: boolean = true
	){
		super(required, validator, liveValidate)
		this.emptyAsNull = emptyAsNull
	}

	public getValue(): string | null {
		let value = super.getValue()
		if(this.emptyAsNull && value === ""){
			return null;
		}
		return value;
	}

}