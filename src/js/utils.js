import axios from "axios";

export async function checkIsLogin() {
    const response = await axios.get("/api/currentUser");
    var isLogin;
    if (response.data.status === 401) {
        isLogin = false;
        return isLogin;
    } 
    else if (response.data.status === 200 && response.data.success == true) {
        isLogin = true;
        return isLogin;
    }
}
