const API_URL = "http://localhost:3002/api/";

export async function userApi () {
        const response = await fetch(`${API_URL}users`)
        const result = await response.json();
        if (result.meta.status === 200) {
            return result;
          }
        
          return [];
}

export async function lastUserApi () {
  const response = await fetch(`${API_URL}users/lastuser`)
  const result = await response.json();
  if (result.meta.status === 200) {
    const lastUser = await detailUserApi(result.meta.id)
      return lastUser;
    }
  
    return [];
}

export async function detailUserApi(id) {
  const response = await fetch(`${API_URL}users/detail/${id}`)
  const result = await response.json();
  if (result.meta.status === 200) {
      return result.meta.data;
    }
  
    return [];
}


