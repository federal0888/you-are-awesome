// DO WHATEVER YOU WANT HERE
const createEnumerableProperty = (propertyName) => {
    return propertyName;
};
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        enumerable: false,
        value: 'value'
    });
    return propertyName;
};
const createProtoMagicObject = () => {
    function magic(){};
    magic.prototype = magic.__proto__;
    return magic;
};

const incrementor = () => {
    incrementor.count = incrementor.count ? incrementor.count : 1;
    function incCount() {
        incrementor.count++;
        return incCount;
    }

    incCount.valueOf = function() {
        return incrementor.count++;
    }
    return incCount;

};
const asyncIncrementor = () => {
    asyncIncrementor.count = asyncIncrementor.count ? asyncIncrementor.count : 0;
    let async;
    async = new Promise( (resolve, reject) => {
        asyncIncrementor.count++;
    return resolve(asyncIncrementor.count);
})
    return async;
};
const createIncrementer = () => {
    function * generator(n = 1){
        yield n;
        yield n + 1;
        yield n + 2;
    }
    return generator();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (a) => {
    let async;
    async = new Promise( (resolve, reject) => {
        setTimeout(() => {return resolve(a)}, 1001)
})
    return async;
};
const getDeepPropertiesCount = (obj) => {
    let count = 0;
    function deepPropCount(obj) {
        for(let key in obj) {
            if( typeof(obj[key]) === 'object'){
                deepPropCount(obj[key]);
            }
            count++;
        }
        return count;
    }
    return deepPropCount(obj);
};
const createSerializedObject = () => {
    return null;
};
const toBuffer = () => {};
const sortByProto = (array) => {
    return array.sort();
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
