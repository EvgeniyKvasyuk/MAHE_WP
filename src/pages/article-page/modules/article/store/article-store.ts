import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ArticleState {
    value: number
}

const initialState: ArticleState = {
    value: 0,
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = articleSlice.actions

export const articleReducer = articleSlice.reducer
