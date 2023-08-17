import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "./user";


export const userSelectorState = createFeatureSelector<User>('user')

export const userSelectorData = createSelector(
    userSelectorState,
(state:User | null)=>{
    console.log(state)
    return state
}
)