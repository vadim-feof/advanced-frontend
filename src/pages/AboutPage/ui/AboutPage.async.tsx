import {lazy} from "react";
import devLazyLoadingTimeout from "@/shared/lib/devLazyLoadingTimeout";

export const AboutPageAsync = lazy(() =>
    devLazyLoadingTimeout(import(/* webpackChunkName: "AboutPage"*/'./AboutPage'))
)
