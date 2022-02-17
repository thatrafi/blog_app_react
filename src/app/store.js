import { configureStore } from "@reduxjs/toolkit";

import { blogApi} from '../services/blogApi'

export default configureStore({
    reducer: {
        [blogApi.reducerPath] : blogApi.reducer
    },
})