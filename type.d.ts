
type ActiveUser = {
    createdAt: string;
     id: string;
     name: string | null;
     email: string | null;
     phone: string | null;
     password: string | null;
     emailVerified: Date | null;
     image: string | null;
 } | any