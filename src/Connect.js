import _ from 'lodash';
const connect = (es6Class, parent) => ccClass(es6Class, parent);

export default connect;

function es6Class(es6Class, parent){
    let es6Mapper = {
            properties: {...(new es6Class())},
            extends: parent || cc.Component
        };
    return _.reduce(
        Object.getOwnPropertyNames(es6Class.prototype), 
        (accumulator, key)=> {
            if(key !== 'constructor'){
                accumulator[key] = es6Class.prototype[key];
            }
                return accumulator;
        },
        es6Mapper);
}

function ccClass(ccClass, parent){
    return cc.Class(es6Class(ccClass, parent));
}