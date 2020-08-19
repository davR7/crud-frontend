import Vue from 'vue'

export function showError(err){
    const error = err.response.data.error
    const status = err.response.status

    if (err && err.response && err.response.data){
        Vue.toasted.global.defaultError({ message: `Error ${status}: ${error}` })
    } else if (typeof e === 'string'){
        Vue.toasted.global.defaultError({ message: err })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export function showSuccess(msg){
    Vue.toasted.global.defaultSuccess({ message: msg })    
}