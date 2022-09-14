/** 
 *  Sort the first colomn of the array using a string compare function. If (a.length < b.length) => -1, (a.lenght = b.length) => compare the character. if (a.length > b.lenght) = 1
 * 
 *  @param {*[][]} arr array to be sorted
 *  @param {function(*a, *b)} newCallBack a new function to compare the value of the first column of the array. 0 otherwise
 *  @return {*[][]}  the sorted array
 */
function mySort(arr,newCallBack){
  var s = new QuickSort(newCallBack);
  return s.sort(arr);
}


/** 
 *  Merge two array with the same primary key in the first column of the two array using a string compare function. If (a.length < b.length) => -1, (a.lenght = b.length) => compare the character. if (a.length > b.lenght) = 1
 * 
 *  @param {*[][]} arr1 first array to be merge, arr1[0] is the key to compare with arr2[0]
 *  @param {*[][]} arr2 second array to be merge
 *  @param {function(*a, *b)} newCallBack a new function to compare the value of the array. 0 otherwise
 *  @return {*[][]} the merge array
 */
function myMerge(arr1,arr2,newCallBack){
  var arr3;
    if(arr1.length <= arr2.length)
        arr3 = mergePrivate(arr1,arr2,newCallBack);
    else
       arr3 = mergePrivate(arr2,arr1,newCallBack);

  return arr3;
}

/**
 * The function implement the classical join of sql. The first array must have the first column as foreign key, and the second array must have the first column as primary key
 * 
 * @param {*[][]} arr1 the first table, foreign key must the first coloumn
 * @param {*[][]} arr2 the secon table, primary key must be the first coulmn
 * @param {function(*a, *b)} newCallBack a new function to compare the value of the array. 0 otherwise
 * @return {*[][]} the joined array
 */
function myJoin(arr1,arr2,newCallBack){
   return mergePrivate(arr2,arr1,newCallBack);
}

/** 
 *  Private method for myMerge function 
 * 
 *  @param {*[][]} arr1 first array to be merge, arr1[0] is the key to compare with arr2[0]
 *  @param {*[][]} arr2 second array to be merge
 *  @param {function(*a, *b)} newCallBack a new function to compare the value of the array. 0 otherwise
 *  @return {*[][]} the merge array
 */
function mergePrivate(arr1,arr2, newCallBack){
  var arr3,arr4,arr5;
  arr3 = new Array();
  arr5 = new Array();
  var s = new QuickSort(newCallBack);
  var ss = new Search(newCallBack)
  var i =0;
  var index = 0;
  arr4 = s.sort(arr1);

  for(i=0;i< arr2.length;i++){
    if((index = ss.binarySearch(arr4, arr2[i][0]))>=0){
          for(j=1;j<arr2[i].length;j++)
             arr5.push(arr2[i][j]); 
          arr3.push(arr4[index].concat(arr5));
          arr5 = new Array();
    }
  }
  

  return (arr3.length !=0)?arr3:"there is no values";

}

/**
 * Comparator : Class to implement algorithms to do the search of each value
 * 
 * @param {function(a: *,b: *)} newCallBack If provided then all elements comparisons will be done through this callback.
 */

class Comparator {

  constructor(newCallBack){
      this.compare = ((newCallBack == 0)? this.compareDefault  : newCallBack);
  }
  /**
   * Default comparison function. It just assumes that "a" and "b" are strings .
   * 
   * @param {(string|number)} a
   * @param {(string|number)} b
   * @returns {number}
   */
  compareDefault(a, b) {
   var i =0;
   var ret = 0;
   var temp =0;
   a = (a.toString());
   b = (b.toString());
   if(a.length == b.length){
     for(i=0;i<a.length;i++){
       if((temp=((a.charAt(i)).charCodeAt() - (b.charAt(i)).charCodeAt()))<0){
          ret = -1;
          break;
       }else{
          if(temp >0){
            ret = 1;
            break;
          }
       }
     }
   }else{
     if(a.length<b.length){
       ret = -1;
     }else{
       ret = 1;
     }


   }
   return ret;
  }

  /**
   * Checks if two variables are equal.
   * 
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  equal(a, b) {
    return this.compare(a, b) === 0;
  }

  /**
   * Checks if variable "a" is less than "b".
   * 
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  lessThan(a, b) {
    return this.compare(a, b) < 0;
  }

  /**
   * Checks if variable "a" is greater than "b".
   * 
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  greaterThan(a, b) {
    return this.compare(a, b) > 0;
  }

  /**
   * Checks if variable "a" is less than or equal to "b".
   * 
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  lessThanOrEqual(a, b) {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  /**
   * Checks if variable "a" is greater than or equal to "b".
   * 
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  greaterThanOrEqual(a, b) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }

}

/**
 * Sort class
 * 
 * @param {function(a: *, b: *)} cnewCallback - If provided then all elements comparisons will be done through this callback.
 */


class Sort {
  constructor(newCallBack) {

    this.comparator = new Comparator(newCallBack);
  }

  sort() {
    throw new Error('sort method must be implemented');
  }
}

/**
 * Quick Sort class
 * 
 * @param {function(a: *, b: *)} newCallback - If provided then all elements comparisons will be done through this callback.
 */
class QuickSort extends Sort {
  
  constructor(newCallBack){
    super(newCallBack);

  }
  /**
   * sort function of quicksort class
   * 
   * @param {*[]} originalArray
   * @return {*[]}
   */
  sort(originalArray) {
    // Clone original array to prevent it from modification.
    var array = originalArray;

    // If array has less than or equal to one elements then it is already sorted.
    if (array.length <= 1) {
      return array;
    }

    // Init left and right arrays.
    const leftArray = [];
    const rightArray = [];

    // Take the first element of array as a pivot.
    const pivotElement = array.shift();
    const centerArray = [pivotElement];

    // Split all array elements between left, center and right arrays.
    while (array.length) {
      const currentElement = array.shift();



      if (this.comparator.equal(currentElement, pivotElement)) {
        centerArray.push(currentElement);
      } else if (this.comparator.lessThan(currentElement, pivotElement)) {
        leftArray.push(currentElement);
      } else {
        rightArray.push(currentElement);
      }
    }

    // Sort left and right arrays.
    const leftArraySorted = this.sort(leftArray);
    const rightArraySorted = this.sort(rightArray);

    // Let's now join sorted left array with center array and with sorted right array.
    return leftArraySorted.concat(centerArray, rightArraySorted);
  }
}

/**
 * Binary search implementation.
 *
 * @param {function(a: *,b: *)} newCallBack If provided then all elements comparisons will be done through this callback.
 */
class Search {
  constructor(newCallBack) {

    this.comparator = new Comparator(newCallBack);
  }

/*
 * BinarySearch
 * 
 * @param {*[]} sortedArray
 * @param {*} seekElement
 * @return {number}
 */
 binarySearch(sortedArray, seekElement) {

  // These two indices will contain current array (sub-array) boundaries.
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  // Let's continue to split array until boundaries are collapsed
  // and there is nothing to split anymore.
  while (startIndex <= endIndex) {
    // Let's calculate the index of the middle element.
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    // If we've found the element just return its position.
    if (this.comparator.equal(sortedArray[middleIndex][0], seekElement)) {
      return middleIndex;
    }

    // Decide which half to choose for seeking next: left or right one.
    if (this.comparator.lessThan(sortedArray[middleIndex][0], seekElement)) {
      // Go to the right half of the array.
      startIndex = middleIndex + 1;
    } else {
      // Go to the left half of the array.
      endIndex = middleIndex - 1;
    }
  }

  // Return -1 if we have not found anything.
  return -1;
 }
}