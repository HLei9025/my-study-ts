
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

var dbUrl = 'xxxxx';
function getData123(): any[] {
    console.log('获取数据库的数据');
    return [
        { title: '123' },
        { title: '456' }
    ]
}
function save(){
    console.log('保存数据成功');
}
export {dbUrl, getData123}
export default save;