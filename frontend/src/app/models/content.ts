export interface ContentResponse {
    status: number;
    message: string;
    data: Content [];
}
export interface Content {
    id: number;
    title: string;
    content:string
}
