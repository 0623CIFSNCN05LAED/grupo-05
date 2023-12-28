const API_URL = "http://localhost:3002/api/";

export async function productApi () {
        const response = await fetch(`${API_URL}products`)
        const result = await response.json();
        if (result.meta.status === 200) {
            return result;
          }
        
          return [];
}

export async function deleteProductApi(productID){
        const response = await fetch(`${API_URL}products/delete/${productID}`)
        const result = await response.json()
        if(result.status === 200){
          return true;
        }
        return false
}
export async function activateProductApi(productID){
  const response = await fetch(`${API_URL}products/activate/${productID}`)
  const result = await response.json()
  console.log(result)
  if(result.status === 200){
    return true;
  }
  return false
}

export async function detailProductApi(productID){
  const response = await fetch(`${API_URL}products/detail/${productID}`)
  const result = await response.json()
  if(result.meta.status === 200){
    return result.meta.data;
  }
  return false
}

export async function lastProductApi(){
  const response = await fetch(`${API_URL}products/lastproduct`)
  const result = await response.json()
  if(result.meta.status === 200){
    const id = result.meta.id
    const resultDetail = await detailProductApi(id)
    return resultDetail.product
  }
  return false
}

