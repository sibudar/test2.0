export interface ContentResponse {
    status: number;
    message: string;
    data: Content [];
}
interface Content {
    id: number;
    title: string;
    content:string
}
