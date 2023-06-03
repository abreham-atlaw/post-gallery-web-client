import Model from "@/lib/models/model";
import Artwork from "./artwork";
import { Gender } from "./gender";


export default class Artist implements Model<string>{
	
	public id: string | null;
	
	public fullName: string;
	public gender: Gender;
	public email: string;
	public phoneNumber: string;
	public nationality: string;
	public dateOfBirth: Date;
	public biography: string;

	public artworks?: Artwork[];

	public constructor(
		id: string | null = null,
		fullName: string,
		gender: Gender,
		phoneNumber: string,
		email: string,
		nationality: string,
		biography: string,
		dateOfBirth: Date
	){
		this.id = id;
		this.fullName = fullName;
		this.gender = gender;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.nationality = nationality
		this.biography = biography
		this.dateOfBirth = dateOfBirth
	}


	getPK(): string | null {
		return this.id;
	}
	setPK(pk: string): void {
		this.id = pk;
	}

}