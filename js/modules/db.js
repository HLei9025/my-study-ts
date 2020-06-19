"use strict";
/*
export var dbUrl = 'xxxxx';
export function getData123(): any[] {
    console.log('获取数据库的数据');
    return [
        { title: '123' },
        { title: '456' }
    ]
}
export function save(){
    console.log('保存数据成功');
} */
Object.defineProperty(exports, "__esModule", { value: true });
var dbUrl = 'xxxxx';
exports.dbUrl = dbUrl;
function getData123() {
    console.log('获取数据库的数据');
    return [
        { title: '123' },
        { title: '456' }
    ];
}
exports.getData123 = getData123;
function save() {
    console.log('保存数据成功');
}
exports.default = save;
