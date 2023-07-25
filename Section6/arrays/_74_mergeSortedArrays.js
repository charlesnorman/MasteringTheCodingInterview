/* Merge two sorted array*/

function mergeSortedArrays(array1, array2)
{
    const mergedArray = [];
    let i = 0;
    let j = 0;
    let array1Item = array1[i];
    let array2Item = array2[j];

    while(array1Item || array2Item)
    {
        console.log(array1Item, array2Item)
        if((!array2Item || array1Item < array2Item))
        {
            mergedArray.push(array1Item);
            i++;
            array1Item = array1[i]
        } else 
        {
            mergedArray.push(array2Item);
            j++;
            array2Item = array2[j];
        } 
    }
    return mergedArray;
}


console.log(mergeSortedArrays([0,3,4,31],[4,6,30]));


