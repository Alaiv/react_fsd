export enum UserRoles {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    USER = 'USER',
}

export interface IUser {
    id: number,
    username: string,
    avatar?: string,
    role?: UserRoles[],
}

export interface UserSchema {
    authData?: IUser,
    _inited?: boolean
}
