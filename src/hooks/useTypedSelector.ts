import { TypedUseSelectorHook, useSelector } from "react-redux"
import React from "react"
import { RootState } from "../store/reducers"

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
