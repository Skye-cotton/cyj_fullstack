function disemvowel(str) {
    let newstr=(str.replace(/[A]|[E]|[I]|[O]|[U]|[a]|[e]|[i]|[o]|[u]|/g,''))
    return newstr;
}

console.log(disemvowel('Welcome'));