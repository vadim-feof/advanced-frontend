import {lazy} from "react";
import devLazyLoadingTimeout from "@/shared/lib/devLazyLoadingTimeout";

export const MainPageAsync = lazy(() =>
    devLazyLoadingTimeout(import(/* webpackChunkName: "MainPage"*/'./MainPage'))
)
