export interface AnswerResponse {
    status: number;
    message: string;
    data: Answer [];
}
export interface Answer {
    id : number  ;
    user_answer: string ;
}