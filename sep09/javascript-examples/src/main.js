import './style.css'
import {classroomInfo, plusOne} from './myModule';

console.log(classroomInfo);
console.log(plusOne(5));

import * as myModule from './myModule';
console.log(myModule.classroomInfo);
console.log(myModule.plusOne(5));

import {classroomInfo as myClassInfo} from './myModule';
console.log(myClassInfo);

import plusTwo from './myModuleDefaultExports';
console.log(plusTwo);

import _ from 'lodash';
console.log(_.chunk(['a', 'b', 'b', 'd'], 2));

function search(value) {
    console.log(value);
}

/* const searchBar = document.getElementById('search');
searchBar.addEventListener('input', e => {
    search(searchBar.value);
}) */

const debouncedSearched = _.debounce(search, 200);

const searchBar = document.getElementById('search');
let timeOutId;
searchBar.addEventListener('input', e => {
    // debouncedSearched(searchBar.value);
    if (!timeOutId) {
        clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
        search(searchBar.value);
        timeOutId = undefined;
    }, 200);
});