import axios from "axios";
import type { AxiosResponse } from "axios";
 


interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


export const ApiResponse = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response.data);
    } catch (error: any) {
        if(axios.isAxiosError(error)){
            console.log("Axios Error", error.message);
            if(error.response) {
                console.log(error.response.status);
            }
        }
        console.error(error.message)
    }
}