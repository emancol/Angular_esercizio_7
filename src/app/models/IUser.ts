export interface User{
    id:number;
    name:string;
    surname:string;
    age:number;
    dateOfBirth:string;
    address:address;
    role:role;
    username:string;
    profilePhotoUrl:string;
    gender:gender;
}
interface address {
    city:string;
    street:string;
    postalCode:string;
}
export enum role {
    STAFF= 'staff',
    cat='cat',
    ADMIN='admin'
}
export enum gender{
    MALE='male',
    FEMALE='female',
    we='whatever'
}