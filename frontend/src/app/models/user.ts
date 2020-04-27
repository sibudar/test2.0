export interface UserResponse {
    status : number,
    message : string,
    data : LoginResponse
     
}
export interface LoginResponse {
    id : number,
    first_name : string,
    last_name : string,
    email : string  
}