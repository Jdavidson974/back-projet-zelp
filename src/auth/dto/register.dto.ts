export class RegisterDto {
    email: string;
    password: string;
    lastName: string;
    firstName: string;
    villeId: number
    type: 'client' | 'restaurateur';
}