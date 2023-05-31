const nextElementList = (index , arr) => {
    index += 1
    if (index > arr.length - 1) {
        index = 0;
    }
    return index
}

export default nextElementList;