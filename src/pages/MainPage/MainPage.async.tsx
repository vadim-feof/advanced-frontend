import {lazy} from "react";
import devLazyLoadingTimeout from "../../helpers/devLazyLoadingTimeout";

export const MainPageAsync = lazy(() =>
    devLazyLoadingTimeout(import(/* webpackChunkName: "MainPage"*/'./MainPage'))
)
