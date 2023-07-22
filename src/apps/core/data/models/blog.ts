import Model from "@/lib/models/model";

export default class Blog implements Model<string>{


    id: string | null = null;
    title: string;
    cover: string;
    content: string;

    constructor(
		id: string | null,
        title: string,
        cover: string,
        content: string
    ){
		this.id = id;
        this.title = title;
        this.cover = cover;
        this.content = content;
    }
    getPK(): string | null {
        return this.id;
    }
    setPK(pk: string): void {
        this.id = pk;
    }

    



}