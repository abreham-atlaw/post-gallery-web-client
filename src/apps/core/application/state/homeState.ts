import BaseState from "@/lib/state/baseState";

export class SlideState {
    slideIndex: number;
    bgImage: string;

    constructor() {
        this.slideIndex = 0;
        this.bgImage = '';
    }
}



export default class HomeState extends BaseState {
    slideState: SlideState;
	images?: string[];

    constructor() {
        super();  // initialize BaseState
        this.slideState = new SlideState();  // initialize SlideState
    }
}