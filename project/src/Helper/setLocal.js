const SetLocal = (arr, name, desc, type, id) => {
    arr.push({id: id, name: name, description: desc}); 
    let str = JSON.stringify(arr);
    localStorage.setItem(type, str);
}

export default SetLocal;