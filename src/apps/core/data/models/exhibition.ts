import Model from "@/lib/models/model";
import Artist from "./artist";


export default class Exhibition implements Model<string>{

	public id: string | null;

	public artistId: string;

	public name: string;
	public description: string;
	public startDate: Date;
	public endDate: Date;
	public venue: string;

	public artist?: Artist;

	constructor(
		id: string | null,
		artistId: string,
		name: string,
		description: string,
		startDate: Date,
		endDate: Date,
		venue: string
	){
		this.id = id;
		this.artistId = artistId;
		this.name = name;
		this.description = description;
		this.startDate = startDate;
		this.endDate = endDate;
		this.venue = venue;
	}

	getPK(): string | null {
		return this.id
	}

	setPK(pk: string): void {
		this.id = pk;
	}

}