const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      //check if an array or object. if array make a copy. if an object create array from values
      const newCollection = Array.isArray(collection) ? [...collection] : Object.values(collection);

      //for of new array through callback
      for(const element of newCollection) {
        callback(element)
      }

      //Returns the original collection for chaining
      return collection;

    },



    map: function(collection, callback) {
      //new array to push new values through
      const newArray = [];

      const newCollection = Array.isArray(collection) ? [...collection] : Object.values(collection);

      for(const element of newCollection) {
        newArray.push(callback(element));
      }

      //Returns a new collection for chaining without modifying the original.
      return newArray;

    },




    reduce: function(collection, callback, accum) {
      let newCollection = Array.isArray(collection) ? [...collection] : Object.values(collection);

      //if accumulator isn't passed into function then set accum to array[0] and the newcollection to start at array[0]
      if(!accum) {
        accum = newCollection[0];
        newCollection = newCollection.slice(1);
      }

      for(const element of newCollection) {
        accum = callback(accum, element);
      };

      return accum;
    },

    find: function(collection, predicate) {
      const newCollection = Array.isArray(collection) ? [...collection] : Object.values(collection);

      for(const element of newCollection) {

        if(predicate(element)) {
          return element;
        }
      }



    },

    filter: function(collection, predicate) {
      const newCollection = Array.isArray(collection) ? [...collection] : Object.values(collection);

      let newArray = []

      for(const element of newCollection) {

        if(predicate(element)) {
          newArray.push(element)
        }
      }

      return newArray;


    },

    size: function(collection){
      const newCollection = Array.isArray(collection) ? [...collection] : Object.values(collection);

      return newCollection.length;


    },

    //array only functions
    first: function(array, n) {
      if(!n){
        return array[0];

      } else {
        return array.slice(0, n);
      }


    },

    last: function(array, n){
      if(!n) {
        //return array.slice(-1);
        return array[array.length-1];

      } else {
        return array.slice(-n);
      }

    },

    compact: function(array) {
      //copy array 
      const arrayCopy = [...array];
      //new array
      const newArray = []

      for(const element of array) {
          if(Boolean(element) === true){
            newArray.push(element);
          }
      }

      return newArray;
    },

    sortBy: function(array, callback) {
      const arrayCopy = [...array];

      //compart to sort numbers correctly
      arrayCopy.sort(function(a,b){
        return callback(a) - callback(b);
      });

      return arrayCopy;


    },

    flatten: function(array, shallow){

    },

    uniq: function(array, isSorted, callback) {

    },

    //object functions 
    keys: function(object) {
      let array = [];

      for(const key in object) {
        array.push(key);
      }

      return array;
    },

    values: function(object) {
      let array = [];

      for(const key in object) {
        array.push(object[key]);
      }

      return array;
    },


    functions: function(object) {
      const array = [];

      for(const key in object) {
        if(typeof object[key] === "function") {
          array.push(key);
        }
      }

      return array;

    },


  }
})()

fi.libraryMethod()
