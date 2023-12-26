const API_URL = "http://localhost:3002/api/";

export async function userApi () {
        const response = await fetch(`${API_URL}users`)
        const result = await response.json();
        if (result.meta.status === 200) {
            return result;
          }
        
          return [];
}
