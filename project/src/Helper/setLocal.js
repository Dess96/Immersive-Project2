const SetLocal = (arr, name, desc, type) => {
    arr.push({name: name, description: desc}); 
    let str = JSON.stringify(arr);
    localStorage.setItem(type, str);
}

export default SetLocal;