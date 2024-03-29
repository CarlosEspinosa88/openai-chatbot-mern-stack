import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  console.log("API", {email, password})

  try {
    const res = await axios.post('/user/login', { email, password });    
    console.log("RES", res)
    
    if (res.status !== 200) { 
      throw new Error("Unable to login");
    }

    const data = await res.data;

    return data

  } catch (error) {
    throw new Error("Unable to login", error);
  }
}
