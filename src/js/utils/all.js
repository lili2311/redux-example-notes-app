'use strict';

export function updateObject(oldObject, newValues) {

	console.log("===== oldObject:", oldObject);
	console.log("===== NewValues:", newValues);

    return Object.assign({}, oldObject, newValues);
}

export function updateItemInArray(array, itemId, updateItemCallback) {

    const updatedItems = array.map((item) => {
    	console.log(`item ID = ${item.id}, itemIdPassedIN = ${itemId}`)
        if (item.id !== itemId) {
            return item;
        }

        const updatedItem = updateItemCallback(item);
        console.log("Updated the item it is now", item)

        return updatedItem;
    });

    return updatedItems;
}
