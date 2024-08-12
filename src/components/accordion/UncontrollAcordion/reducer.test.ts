import {reducer, StateType, TOGLE_COLLAPSED} from "./reducer";

test("reducer should be change tru to false",()=>{

    //data
    const state:StateType={
        collapsed:true
    }

    //action
    const newState=reducer(state,{type:TOGLE_COLLAPSED})

    //expected
    expect(newState.collapsed).toBe(false)
})