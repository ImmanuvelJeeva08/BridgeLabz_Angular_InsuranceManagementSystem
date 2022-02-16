import { User } from "./user";

export class Claim {
    id          : number;
    user        : User;
    base64image : string;
    filepath    : string;
    totalAmount : number;
    claimDate   : Date;
    bill        : string;
    cheque      : string;
    reason      : string;
    status      : string;
}
