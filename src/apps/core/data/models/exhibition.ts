import Model from "@/lib/models/model";
import Artist from "./artist";
import Artwork from "./artwork";


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

	public coverImage: string;
	public artworkIds: string[];

	public artist?: Artist;
	public artworks?: Artwork[];

	constructor(
		id: string | null,
		artistId: string,
		name: string,
		description: string,
		dateRange: DateRange,
		timeFrame: TimeRange,
		venue: string,
		curator: string,
		coverImage: string,
		artworkIds: string[]
	){
		this.id = id;
		this.artistId = artistId;
		this.name = name;
		this.description = description;
		this.dateRange = dateRange;
		this.venue = venue;
		this.curator = curator;
		this.timeFrame = timeFrame
		this.coverImage = coverImage
		this.artworkIds = artworkIds
	}

	getPK(): string | null {
		return this.id
	}

	setPK(pk: string): void {
		this.id = pk;
	}

	isActive(): boolean{
		let now = new Date(Date.now())
		return (this.dateRange.startDate < now ) && (now < this.dateRange.endDate)
	}

	isUpcoming(): boolean{
		return (this.dateRange.startDate > new Date(Date.now())) 
	}

}