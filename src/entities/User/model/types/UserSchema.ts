export interface IUser {
    id: number,
    title: string,
}

export interface UserSchema {
    authData?: IUser
}
