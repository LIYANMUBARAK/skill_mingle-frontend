import { createReducer, on } from "@ngrx/store";
import { fetchUserAPISuccess } from "./user.action";
import { User, UserInitail } from "./user";



export const initalState: User={
    _id:'',
    name:'',
    userName:'',
    email:'',
    password:'',
    mobileNumber:0,
    country:'',
    city:'',
    isBlocked:false,
    
}

export const InitialUserState: UserInitail = {
    user: null,
}

const _userReducer = createReducer(
    InitialUserState,
    on(fetchUserAPISuccess, (_state, { userData }) => ({ ..._state,...userData}))
)

export function userReducer(state: any, action: any) {
    return _userReducer(state, action);
}