function wordToUpperCase(str) {
    return str.replace(/\b\w+\b/g, function(word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1)
    })
}
