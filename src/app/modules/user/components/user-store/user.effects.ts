import { Injectable } from "@angular/core";
import { ofType, Actions, createEffect } from "@ngrx/effects";
import { fetchUserAPISuccess, fetchUserAPI } from "./user.action";
import { map, switchMap, tap } from "rxjs";
import { FrontendService } from "src/app/services/frontend.service"
import { User } from "./user";




@Injectable()

export class userEffects {
    constructor(private actions$: Actions, private service: FrontendService) { }


    loadUserProfile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchUserAPI),
            switchMap(() => {
                let userId: string | null = localStorage.getItem('userId')

                return this.service.getUserUsingId(userId)
                    .pipe(
                        tap((data) => console.log("a")),
                        map((data:{user:User}) => fetchUserAPISuccess({ userData:data.user }))
                    )
            })
        )
    )
}