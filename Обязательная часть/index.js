function getCookies() {
    var res = document.cookie
        .split("; ")
        .map(
            x => {
                var tmp = x.split("=")
                var elem = {}
                elem[tmp[0]] = tmp[1]
                return elem
            }
        )
    return Object.assign({}, ...res)
}
const addingDateToCookies = document.getElementById('addingDateToCookies'); 
addingDateToCookies.onclick = function addingCookies(event) {
    const theCurrentDate = new Date().toUTCString() 
    document.cookie = `dateOfLastVisit=${theCurrentDate}`
    console.log(`This function is working and ${document.cookie}`)
}

const customCookies = getCookies();
if ("dateOfLastVisit" in customCookies) {
    const outputField = document.getElementById('outputField')
    const lastDate = document.createElement("p");
    lastDate.innerHTML = customCookies.dateOfLastVisit
    outputField.appendChild(lastDate);
}
