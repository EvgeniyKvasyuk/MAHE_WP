import {createAsyncThunk} from "@reduxjs/toolkit";
import {articleApi} from "./article-api";
import {incrementByAmount} from "./article-store";

export const articleTestAction = createAsyncThunk(
    'article',
    async (data, {fulfillWithValue, rejectWithValue, dispatch}) => {
        try {
            const data = await articleApi();
            dispatch(incrementByAmount(5)); // example
            return fulfillWithValue(data);
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)
