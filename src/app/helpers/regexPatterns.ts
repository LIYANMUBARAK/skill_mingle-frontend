import { Validators } from "@angular/forms";

export const patterns={
    email:['',[Validators.email,Validators.required]],
    password:['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$")]]
}