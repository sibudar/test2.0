export interface QuestionsResponse {
    status: number;
    message: string;
    data: Questions[];
}
interface Questions {
    id: number;
    q_name: string;
}
