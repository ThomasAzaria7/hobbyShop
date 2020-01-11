import { createAction, props } from '@ngrx/store';

export const mobileNav = createAction('switch on navigaton for mobile and tablet', props<{state:any}>())
export const getRecipt = createAction('on complete purchase save purchase recipt',props<{recipt}>());
export const sendProduct = createAction('send products through out application', props<{Products:{products:any}}>());
export const cartCount = createAction('update the number of items in cart', props<{itemsNumber:{count:any}}>());
export const loggedIn = createAction('user is logged in', props<{Authenicated:{auth:any}}>());
// export const CategoryNum = createAction('array number for category', props<{itemCategoryNum:any}>());





export const action = createAction('[Source] Event');
[]