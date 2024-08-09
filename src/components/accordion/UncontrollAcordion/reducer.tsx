import {ActionType} from "./UncontrollAccordion";

export const TOGLE_CONSTANT='TOGGLE-COLLAPSED'

type StateType={
    collapsed:boolean
}

export const reducer=(state:StateType, action:ActionType):StateType=>{
    switch (action.type) {
        case TOGLE_CONSTANT:
            return {
                ...state,
               collapsed:!state.collapsed
            };

        default:
            throw new Error("Bad action type")
    }


    return state
}