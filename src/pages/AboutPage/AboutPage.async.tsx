import {lazy} from "react";
import devLazyLoadingTimeout from "../../helpers/devLazyLoadingTimeout";

export const AboutPageAsync = lazy(() =>
    devLazyLoadingTimeout(import(/* webpackChunkName: "AboutPage"*/'./AboutPage'))
)
