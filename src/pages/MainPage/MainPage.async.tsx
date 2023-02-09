import {lazy} from "react";
import devLazyLoadingTimeout from "../../utils/devLazyLoadingTimeout";

export const MainPageAsync = lazy(() =>
    devLazyLoadingTimeout(import(/* webpackChunkName: "MainPage"*/'./MainPage'))
)
