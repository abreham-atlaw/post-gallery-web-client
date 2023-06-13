import Model from "@/lib/models/model";
import Artist from "./artist";


interface DateRange{

	startDate: Date
	endDate: Date

}

interface TimeRange{

	startTime: number;
	endTime: number;

}

export default class Exhibition implements Model<string>{

	public id: string | null;

	public artistId: string;

	public name: string;
	public description: string;

	public dateRange: DateRange
	public timeFrame: TimeRange

	public venue: string;
	public curator: string;

	public artist?: Artist;



	constructor(
		id: string | null,
		artistId: string,
		name: string,
		description: string,
		dateRange: DateRange,
		timeFrame: TimeRange,
		venue: string,
		curator: string
	){
		this.id = id;
		this.artistId = artistId;
		this.name = name;
		this.description = description;
		this.dateRange = dateRange;
		this.venue = venue;
		this.curator = curator;
		this.timeFrame = timeFrame
	}

	getPK(): string | null {
		return this.id
	}

	setPK(pk: string): void {
		this.id = pk;
	}

}