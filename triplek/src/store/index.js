import {createStore} from "vuex";
import {about_me} from "./modules/about-me.js";
import {applications} from "./modules/applications.js";

export const store = createStore({
    modules : {
        about_me : about_me,
        applications: applications,
    },
})