import Api from './Api';

export default {
    register(credentials) {
        return Api().post('register', credentials)
    }
}

// AuthenticationService.register({
//     email: 'randy@gmail.com',
//     password: 'test1234'
// })