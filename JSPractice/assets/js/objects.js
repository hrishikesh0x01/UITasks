let obj1 = {
    name: "Hrishi",
    gender: "Male"
}

let obj2 = {
    gender: "male",
    company: "1Rivet",
    location: "Valsad"
}

// assigns the values in obj2 into obj1. MODIFIES obj1.
// values in obj1 are overwritten by values in obj2 for same key.
console.log(Object.assign(obj1, obj2));

// defines properties for an object //////////////// I have doubts in this.
var obj = {};
console.log(Object.defineProperties(obj, {
    'property1': {
        value: true,
        writable: true
    },
    'property2': {
        value: 'Hello',
        writable: false
    }
}));

// defines single property on object
console.log(Object.defineProperty(obj, 'property3', {
    value: 42,
    writable: false
}));

// Returns an array of [key, value] pairs of the object.
console.log(Object.entries(obj1));

// freeze method freezes the object after that no properties of that object can be changed.
console.log(Object.freeze(obj2));

// Creates an object from array (or iterable) of [key, value] pairs.
console.log(Object.fromEntries(Object.entries(obj1)));

// returns property descriptors for all properties
console.log(Object.getOwnPropertyDescriptors(obj1));

// returns property descriptor for specific property
console.log(Object.getOwnPropertyDescriptor(obj1, 'name'));

// returns an array of names of all properties
console.log(Object.getOwnPropertyNames(obj1));

// returns true if the object has specified property
console.log("For property which is not present:- ", obj1.hasOwnProperty('age'));
console.log("For property which is present:- ", obj1.hasOwnProperty('name'));
// Object.is()
// Object.isExtensible()
// Object.isFrozen()
// Object.isPrototypeOf()
// Object.isSealed()
// Object.keys()
// Object.preventExtensions()
// Object.propertyIsEnumerable()
// Object.seal()
// Object.setPrototypeOf()
// Object.toLocaleString()
// Object.toSource()
// Object.toString()
// Object.valueOf()
// Object.values()