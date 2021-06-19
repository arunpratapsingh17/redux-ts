//Code required,necessary for redux+ts
import React from 'react'
import { useSelector,TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
