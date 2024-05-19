interface TimestampAudit {
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IUser extends TimestampAudit {
    id: string;
    names: string;
    email: string;
    role: 'USER' | 'ADMIN';
    telephone: string;
}

export interface IProduct extends TimestampAudit {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
}