export const getFormErrorMessages = (errors: Object, messages:string[] = []) => {
    for(const error of Object.values(errors)){ 
        if(typeof error.message !== "string"){
            getFormErrorMessages(error, messages)
            continue
        }
        messages.push(error.message)
    }
    return messages
}