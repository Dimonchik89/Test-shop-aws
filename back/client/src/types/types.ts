
// export interface ITodo {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// }

export interface IType {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ICategory extends IType {};

export type TSignArgs = {
    url: string;
    email: string;
    password: string;
}

export interface TUserData {
    email: string;
    password: string;
}

export interface ITokenDecod {
    email: string;
    role: string;
}

export interface IFielProps {
    name: string;
    validate?: (...arg: any) => void;
    type?: string;
    label?: string;
}

export interface ISignProps {
    fetchUser: (arg: TSignArgs) => TSignArgs
}

export interface IFormProps {
    title: string;
    onSubmit: (value: TUserData) => void;
    // validate: (...arg: any) => void;
    // type: string;
    // label: string;
    formFields: IFielProps[];
}

export interface IPostData {
    url: string;
    name?: string;
    cost?: string;
    categoryId?: number;
    typeId?: number;
    info?: string;
}

export interface IButtonProps {
    type: "submit" | "button";
    title: string;
    submitting?: boolean;
    onClick?: (arg: any) => void;
}

export interface IGetName {
    name: string
}

export interface IUserDecod {
    id: number;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IProduct {
    id: number;
    name: string;
    cost: number;
    img: string;
    typeId: number;
    categoryId?: number;
    createdAt: Date;
    updatedAt: Date;
}