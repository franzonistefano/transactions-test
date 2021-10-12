import HomeContainer from "../containers/HomeContainer";
import NotFoundContainer from "../containers/NotFoundContainer";

export const RouteList =
    [
        {
            "path": "/",
            "component": HomeContainer,
            "_private": false,
            "redirectTo": "",
            "children": [],
            "exact": true
        },
        //questa pagina deve rimanere sempre per ultimissima!
        {
            "path": "",
            "component": NotFoundContainer,
            "_private": false,
            "redirectTo": "",
            "children": [],
            "exact": true
        }
    ]