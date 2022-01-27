import { login } from "../services/auth";

export const authProvider = {
	isAuthenticated: false,
	signin: async (data, callback) => {
		try {
			const response = await login(data);
			const user = {
				token: response.data.token,
				name: response.data.user.name,
				api_code: response.data.user.api_code,
			};
			localStorage.setItem("user", JSON.stringify(user));
			console.log(response);

			callback(user);
		} catch (error) {}
	},
	signout: (callback) => {
		localStorage.removeItem("user");
		callback();
	},
};
