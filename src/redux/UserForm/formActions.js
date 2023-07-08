import { SUBMIT_FORM } from "./formTypes"

export const submitForm = ({name, age}) => {
    return {
        type: SUBMIT_FORM,
        payload: {name, age}
    }
}