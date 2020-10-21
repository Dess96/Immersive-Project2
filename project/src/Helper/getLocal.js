const GetLocal = (colName) => {
    const collection = JSON.parse(localStorage.getItem(colName));
    return collection;
}

export default GetLocal;