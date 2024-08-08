import type { IUserPublic } from "../interfaces/user.public";

export class UserPublic implements IUserPublic
{
    idUser: string
    photoUser: string
    fechaNacimiento: any
    historiasPublicas: number
    mdPortada: string
    likes: number
    promedioLikesHistorias: number
    followers: number
    fechaUltimoAcceso: string
    fullName: string
    email: string
}