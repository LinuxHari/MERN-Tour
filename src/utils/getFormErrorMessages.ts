export const getFormErrorMessages = (errors: Object, messages:string[] = [], refs:any=[]) => {
    for(const error of Object.values(errors)){ 
        if(typeof error.message !== "string"){
            getFormErrorMessages(error, messages)
            continue
        }
        messages.push(error.message)
        refs.push(error.ref)
    }
    return {errorMessages: messages, refs}
}