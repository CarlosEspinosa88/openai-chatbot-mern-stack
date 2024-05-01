import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  try {
    const res = await axios.post('/user/login', { email, password });    

    if (res.status !== 200) { 
      throw new Error("Unable to login");
    }

    const data = await res.data;

    return data
  } catch (error) {
    throw new Error("Unable to login", error);
  }
}

export const singUpUser = async (name: string, email: string, password: string) => {
  try {
    const res = await axios.post('/user/singup', { name, email, password });    

    if (res.status !== 200) { 
      throw new Error("Unable to signup");
    }

    const data = await res.data;

    return data
  } catch (error) {
    throw new Error("Unable to login", error);
  }
}

export const logoutUser = async () => {
  const res = await axios.get('/user/logout');    

  if (res.status !== 200) { 
    throw new Error("Unable to login");
  }

  const data = await res.data;

  return data
}

export const checkAuthStatus = async () => {
  const res = await axios.get('/user/auth-status');    
  
  if (res.status !== 200) { 
    throw new Error("Unable to authenticate");
  }

  const data = await res.data;

  return data
}

export const sendChatRequest = async (message: string) => {
  const res = await axios.post('/chats/new', { message })
  console.log('RES', res)

  if (res.status !== 200) { 
    throw new Error("Unable to Chat");
  }

  const data = await res.data;
  return data
}

export const getUserChats = async () => {
  const res = await axios.get('/chats/all-chats')

  if (res.status !== 200) { 
    throw new Error("Unable to send chat");
  }

  const data = await res.data;

  return data
}

export const deleteUserChats = async () => {
  const res = await axios.delete('/chats/delete')

  if (res.status !== 200) {
    throw new Error("Unable to delete chats");
  }

  const data = await res.data;

  return data
}
