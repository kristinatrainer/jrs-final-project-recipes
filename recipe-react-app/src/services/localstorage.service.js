function saveList (list) {
    localStorage.setItem("list", JSON.stringify(list))
}

function getList() {
    let value = localStorage.getItem("list");
    let list = JSON.parse(list)
    return list;
}

function removeList() {
    localStorage.removeList("list");
}

const ls = {
    saveList,
    getList,
    removeList
}

function useLocalStorage() {
    return ls;
}

export { useLocalStorage }