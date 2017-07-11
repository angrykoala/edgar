function checkAdd(a, b) {
    if (a.add) return a.add(b)
    else return a + b
}
