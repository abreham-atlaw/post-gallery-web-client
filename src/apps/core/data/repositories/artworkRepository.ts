import { FireStoreRepository } from "@/lib/repositories/firestoreRepository";
import Artwork from "../models/artwork";
import SerialPkGenerator from "@/lib/repositories/serialPkGenerator";
import Artist from "../models/artist";
import CoreProviders from "../../di/coreproviders";
import ArtworkSerializer from "../serializers/artworkSerializer";
import ArtistRepository from "./artistRepository";
import { DBConfigs } from "@/configs/data_configs";
import { sleep } from "@/lib/utils/time";




export default class ArtworkRepository extends FireStoreRepository<string, Artwork>{
	
	private static ID_PREFIX = "Pg"
	private static ID_SERIAL_DIGITS = 5;

	private pkGenerator: SerialPkGenerator<Artwork>;

	private artistRepository?: ArtistRepository;

	constructor(){
		super(
			CoreProviders.provideFirestoreDB(),
			"artwork",
			"id",
			new ArtworkSerializer(),
		)
		this.pkGenerator = new SerialPkGenerator(this, DBConfigs.PRIMARY_KEY_PREFIX, DBConfigs.PRIMARY_KEY_SERIAL_DIGITS, " - AR")
	}
	
	private getArtistRepository(): ArtistRepository{
		if(this.artistRepository === undefined){
			this.artistRepository = CoreProviders.provideArtistRepository();
		}
		return this.artistRepository;
	}

	public async generateNewPK(_instance: Artwork): Promise<string> {
		return await this.pkGenerator.generateNewPK();
	}

	public async attachForeignKeys(instance: Artwork): Promise<void> {
		let artistRepository = this.getArtistRepository();
		instance.artist = await artistRepository.getByPrimaryKey(instance.artistId);
	}

	public async getByArtist(artist: Artist): Promise<Artwork[]>{
		return await this.getByArtistId(artist.getPK()!);
	}

	public async getByArtistId(id: string): Promise<Artwork[]>{
		let all = await this.getAll()
		return all.filter((artwork: Artwork) => {return artwork.artistId === id});
	}



}