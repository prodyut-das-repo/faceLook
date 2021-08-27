export async function getAllUsers(url) {
    return await fetch(url)
        .then((response) => response.json())
        .then((data) => {return data}).catch(error => console.warn(error));;
}