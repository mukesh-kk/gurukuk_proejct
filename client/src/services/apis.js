
const UserApi = {
    CREATE_USER: `${import.meta.env.VITE_SERVER_END}/api/user/create`,//post
    LOGIN_USER: `${import.meta.env.VITE_SERVER_END}/api/user/login`,//post
    GET_USER: `${import.meta.env.VITE_SERVER_END}/api/user/get`,
    DELETE_USER:`${import.meta.env.VITE_SERVER_END}/api/user/delete/`,
    GET_USER_BY_ID:`${import.meta.env.VITE_SERVER_END}/api/user/get/`,
    UPDATE_USER:`${import.meta.env.VITE_SERVER_END}/api/user/update/`
}
export { UserApi };