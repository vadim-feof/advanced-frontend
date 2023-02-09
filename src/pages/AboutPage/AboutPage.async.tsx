import {lazy} from "react";
import devLazyLoadingTimeout from "../../utils/devLazyLoadingTimeout";

export const AboutPageAsync = lazy(() =>
    devLazyLoadingTimeout(import(/* webpackChunkName: "AboutPage"*/'./AboutPage'))
)
