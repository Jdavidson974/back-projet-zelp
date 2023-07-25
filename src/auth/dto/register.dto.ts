export class RegisterDto {
    email: string;
    password: string;
    lastName: string;
    firstName: string;
    ville: number
    role: 'client' | 'restaurateur';
}