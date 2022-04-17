import { IsString, IsNotEmpty } from 'class-validator';

export class GlobalDto {
    @IsString()
    @IsNotEmpty()
    id: string;
}