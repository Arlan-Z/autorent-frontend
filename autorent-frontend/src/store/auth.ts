import { reactive } from "vue";
import { login as apiLogin } from "../api/auth";

export const auth = reactive({
  token: localStorage.getItem("token") || "",
  user: null as any,

  async login(email: string, password: string) {
    const token = await apiLogin(email, password);
    this.token = token;
    
    localStorage.setItem("token", token);
  },

  logout() {
    this.token = "";
    localStorage.removeItem("token");
  }
});
