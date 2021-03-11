function solution(str, ending) {
    return ending === str.substr(str.length - ending.length)
}