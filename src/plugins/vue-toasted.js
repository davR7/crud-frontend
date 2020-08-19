import Vue from 'vue'
import VueToasted from 'vue-toasted'

Vue.use(VueToasted, {
    iconPack: 'fontawesome',
    duration: 3000
})

Vue.toasted.register(
    'defaultSuccess',
    payload => !payload.message ? 'Tasks you have successfully!' : payload.message,
    { type: 'success', icon: 'check' }
)

Vue.toasted.register(
    'defaultError',
    payload => !payload.message ? 'Oops.. Something Went Wrong..' : payload.message,
    { type: 'error', icon: 'times' }
)

