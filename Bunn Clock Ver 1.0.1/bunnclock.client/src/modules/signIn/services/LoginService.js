import config from '../../../../db.json';
import axios from 'axios';
const { API_SERVER, END_POINT } = config;

export const SignInService = {
    checkExitEmail: async (email) => {
        try {
            // ?email=<value>  http://localhost:3004/accounts?email=test@example.com
            const response = await axios.get(`${API_SERVER}/${END_POINT}`, {
                params: { email }
            });
            const account = response.data.find(account => account.email === email)
            return account !== undefined;
        } catch (error) {
            console.error('Error checking email:', error);
            throw error;
        }
    },

    checkPasswords: async (passwords) =>{
        try {
            const response = await axios.get(`${API_SERVER}/${END_POINT}`, {
                params: { passwords }
            });
            const account = response.data.find(account => account.passwords === passwords)
            return account !== undefined
        }
        catch (error){
            console.log(error);
            throw error;
        }
    },
    
    checkEmailPasswords: async (email, passwords) =>{
        try {
            const response = await axios.get(`${API_SERVER}/${END_POINT}`,{
                params: { email, passwords }
            })
            return response.data.lenght > 0
        }
        catch (error){
            throw error
        }
    }
}