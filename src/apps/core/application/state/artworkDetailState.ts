import { AsyncState } from "@/lib/state/asyncState";
import Artwork from "../../data/models/artwork";



export default class ArtworkDetailState extends AsyncState{

	public artwork?: Artwork;

}