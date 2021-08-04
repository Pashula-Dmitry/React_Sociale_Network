export const updateObjectInArray = (items, itemId, newObj) => {
    return items.map((u) => {
        if (u.id === itemId) {
            return {...u, ...newObj}
        }
        return u;
    })
}