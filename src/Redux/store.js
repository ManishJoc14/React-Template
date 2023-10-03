import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter" //getting counterSlic.reducer

export default configureStore({
    reducer: {
       counter:  counterReducer,   // now i can use counter name in useSelector hook renaming is not necessary but frr simplicity
    }
})