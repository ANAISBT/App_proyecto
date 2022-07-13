import PlaceReducer from './PlaceReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store= configureStore({
    reducer:{
        place:PlaceReducer,
    },
});
