export enum FilterActionTypes {
    SET_VALUE = "SET_VALUE",
    CLEAR_VALUE = "CLEAR_VALUE",
}
export type FilterState = {
    filter?: IFilter
    category?: boolean
    carribean: boolean
    greek: boolean
    french: boolean
    indian: boolean
    chinese: boolean
    calories: number | number[]
}
export interface IFilter {
    filter?: IFilter
    category?: boolean
    carribean: boolean
    greek: boolean
    french: boolean
    indian: boolean
    chinese: boolean
    calories: number | number[]
}

export type FilterAction = {
    type: FilterActionTypes.SET_VALUE
    payload: IFilter
}
export type ClearAction = {
    type: FilterActionTypes.CLEAR_VALUE
    payload: IFilter
}
export type FilterActions = FilterAction | ClearAction
