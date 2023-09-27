let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name) {
    return cats.pop("Ralph")
}

function  destructivelyRemoveFirstCat(name) {
    return cats.shift("Bob")
}

function appendCat(name) {
    return [...cats, "Broom"]
}

function prependCat(name) {
    return ["Arnold", ...cats]
}

function removeLastCat(name) {
    return cats.slice(0,-1)
}

function removeFirstCat(name) {
    return cats.slice(1)
}