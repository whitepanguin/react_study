import { handleActions } from "redux-actions";

const initialValue = {
    jobs:{
        devloper:{
            name: "이재용",
            skills:["React.js","Node.js"]
        },
        planner:{
            name: "이재용",
            skills:["Excel","PowerPoint"]
        }
    },
}

const route = handleActions({
 
},initialValue)

export default route;