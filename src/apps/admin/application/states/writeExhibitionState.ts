import { AsyncState } from "@/lib/state/asyncState";
import ExhibitionForm from "../forms/exhibitionForm";
import Exhibition from "@/apps/core/data/models/exhibition";


export default class WriteExhibitionState extends AsyncState{

	public form = new ExhibitionForm();
	public exhibition?: Exhibition

}