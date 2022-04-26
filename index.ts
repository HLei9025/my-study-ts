console.log('你好ts')
/* *
*   1. 【【ts中的数据类型】】
*   2. 【【ts 中的函数】】
*   3. 【【ts 中定义类】】
*   4. 【【ts 中的接口】】
*   5. 【【typescript 中的泛型】】
*   6. 【【ts 类型、接口、类、泛型的综合运用案例】】
*   7. 【【typescript 模块 模块化】】
*   8. 【【typescript 命名空间】】
*   9. 【【typescript 装饰器】】
 */

// 【【ts中的数据类型】】
/* 
    布尔类型 (boolean)
    数字类型 (number)
    字符串类型 (string)
    数组类型 (array)
    元组类型 (tuple)
    枚举类型 (enum)
    任意类型 (any)
    null 和 undefined
    void 类型
    never 类型
    字面量
    unknown (任意类型的安全模式)
 */

// 布尔类型 (boolean)
var flag = true
// flag = 123
flag = false
var flag: boolean = false // ts 中的写法

// 数字类型 (number)
var num = 123
var num2: number = 1234 // ts 中的写法
num2 = 234

// 字符串类型 (string)
var str = 'this is str'
var str: string = 'this is string' // ts 中的写法 

// 数组类型 (array), ts 中定义数组有2种方式 + any 方法也可以定义数组
var arr: number[] = [11, 22, 33, 44] // 第一种方式
console.log(arr) // [11, 22, 33, 44]
var arr1: Array<number> = [44, 33, 22, 11] // 第二种方式
console.log(arr1) // [44, 33, 22, 11]
var arr3: any[] = [123, true, 'str', 456] // 第三种方式
console.log(arr3) // [123, true, "str", 456]

// 元组类型 (tuple), 属于数组的一种
let arr2: [number, string] = [123, 'this is str']
console.log(arr2) // [123, "this is str"]

// 枚举类型 (enum)  
enum Flag { success = 1, error = 2 }
let s: Flag = Flag.success
console.log(s) //1
let f: Flag = Flag.error
console.log(f) //2
// 如果标识符没有赋值，那他的值就是下标
enum Color { blue, red = 3, 'orange' }
let c: Color = Color.blue
console.log(c) //0
let c1: Color = Color.red
console.log(c1) //3
let c2: Color = Color.orange
console.log(c2) //4

// 任意类型 (any)
var num3: any = 1223
num3 = 'str'
num3 = true
console.log(num3) // true
// 任意类型的用处
var oBox: any = document.getElementById('box');
oBox.style.color = 'red';

// null 和 undefined, 其他(never 类型)数据类型的子类型
// var num4:number; 定义了，但未赋值
// console.log(num4) // 输出 undefined  报错
var num4: undefined;
console.log(num4) // 输出 undefined  正确
var num5: number | undefined;
num5 = 123
console.log(num5) // 123

var num6: null;
num6 = null
console.log(num6) // null

var num7: number | null | undefined
num7 = 1234
console.log(num7) // 1234

// void 类型，表示没有任何类型，一般用于方法没有返回值
function run(): void {
    console.log('run')  // run
}
run()
function run1(): number {
    return 123
}
console.log(run1()) // 123

// never 类型，是其他类型（包括 null 和 undefined）的子类型，代表从不会出现的值
// 这意味着声明 never 的变量只能被 never 类型所赋值
// var a:never
// a = (()=>{
//     throw new Error('错误')
// })()

// 字面量
let kk: 10 // 字面量的方式，相当于将变量直接定义在了10，赋值其他的值就不符合要求
kk = 10
// kk = 11 // 报错
let ll: 1 | 2 | 3 // | 表示或
ll = 1
ll = 2
ll = 3
// ll = 4 // 报错

// unknown
let jj: unknown
jj = 1
jj = 'hello'
let ss: string
// ss = jj // 报错，虽然jj可以说也是any类型，但是它算是any类型的安全模式，不能将unknown类型赋值给指定固定类型的变量
ss = jj as string // 可以使用类型断言
ss = <string>jj // 或者这种类型断言的写法

// 类型别名
// let pp: 1 | 2 | 3 | 4 | 5
// let oo: 1 | 2 | 3 | 4 | 5
// 上面这样写就会很重复很麻烦，可以用类型别名来简化
type myValType = 1 | 2 | 3 | 4 | 5
let pp: myValType
let oo: myValType

// object
let y: {
    name: string,
    age: number,
    gender?: number
}
y = {name: 'ray', age: 20}
let ee: {
    name: string,
    [otherProp: string]: string
} // 可以通过上面的写法表示剩余的属性，反正name是需要的，其他的有无无所谓
ee = {name: 'ray'}
ee = {name: 'ray', status: 'live', gender: 'male'}




// 【【ts 中的函数】】
// 函数的定义

// es5定义函数的方法
// 函数声明法
function runing() {
    return 'runing'
}
// 匿名函数法
var runing2 = function () {
    return 'runing2'
}
// ts定义函数大的方法
// 函数声明法
function func(): string {
    return 'func' //正确
    // return 1223   //错误
}
// 匿名函数法
var func2 = function (): number {
    return 123
}
console.log(func2())

// ts中定义方法传参
function getInfo(name: string, age: number): string {
    return `${name}---${age}`
}
console.log(getInfo('zhngsan', 20))
var getInfo2 = function (name: string, age: number): string {
    return `${name}----${age}`
}
console.log(getInfo2('lisi', 40))

// 没有返回值的方法
function run2(): void {
    console.log('run')
}
run2()

// 可选参数, 可选参数必须配置在参数的最后面
function getInfo1(name: string, age?: number): string {
    if (age) {
        return `${name}---${age}`
    } else {
        return `${name}---年龄保密`
    }
}
console.log(getInfo1('zhngsan', 25))

// 默认参数  在 es5 中，不能设置默认参数，es6 和 ts 中是可以设置默认参数的
function getInfo3(name: string, age: number = 30): string {
    if (age) {
        return `${name}---${age}`
    } else {
        return `${name}---年龄保密`
    }
}
console.log(getInfo3('zhngsan'))
console.log(getInfo3('zhngsan', 50))

// 剩余参数
// function sum(a:number, b:number, c:number, d:number):number{
//     return a+b+c+d;
// }
// console.log(sum(1,2,3,4))
function sum(...result: number[]): void {
    console.log('result:', result) // [1, 2, 3, 4, 5]
    console.log(result instanceof Array) // true
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i]
    }
    console.log('sum:', sum)

}
sum(1, 2, 3, 4, 5)
sum(1, 2, 3, 4, 5, 6)

// ts 函数重载
function abc(name: string): string;
function abc(age: number): string;
function abc(str: any): any {
    if (typeof str === 'string') {
        return 'my name is ' + str
    } else {
        return 'my age is ' + str
    }
}
console.log(abc('Tom')) // my name is Tom
console.log(abc(30)) // my age is 30

function bcd(name: string): string;
function bcd(name: string, age: number): string;
function bcd(name: any, age?: any): any {
    if (age) {
        return `my name is ${name}, and my age is ${age}`
    } else {
        return `my name is ${name}`
    }
}
console.log(bcd('Jack')) // my name is Jack
console.log(bcd('Jack', 20)) // my name is Jack, and my age is 20




// 【【ts 中定义类】】

class Person {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    run(): void {
        console.log(this.name)
    }
    getName(): void {
        console.log(this.name)
    }
    setName(name: string): void {
        this.name = name
    }
}
var p = new Person('zhangsan');
p.run(); // zhangsan
p.getName(); // zhangsan
p.setName('wangwu');
p.run(); // wangwu
p.getName(); // wangwu

// ts 中实现继承
class Person1 {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    run(): string {
        return `${this.name}在运动`
    }
}
var p1 = new Person1('Tom')
console.log(p1.run()) // Tom在运动

class Web extends Person1 {
    constructor(name: string) {
        super(name)
    }
    work(): string {
        return `${this.name}在工作`
    }
    // run():string{
    //     return `${this.name}在运动--子类`
    // }
}
var w = new Web('Jack');
console.log(w.run()) // Jack在运动
console.log(w.work()) // Jack在工作

// ts 类里面的修饰符， typescript 里面定义属性的时候提供了三种修饰符
/* 
    public 公有         在当前类里面、子类、类外面都可以访问
    protected 保护类型   在当前类里面、子类里面可以访问，在类外部无法访问
    private 私有        在当前类里面可以访问，子类、类外部都无法访问

    什么都不加，默认是公有 public
*/

/* function Cat(){
    this.func1 = function(){ // 实例方法
        console.log('111')
    }
}
Cat.func2 = function(){ // 静态方法
    console.log('222')
}
var ccc = new Cat();
ccc.func1() // 111
Cat.func2(); // 222  */

// ts 类中的实例属性和方法以及静态属性和方法
class Dog {
    public name: string; // 实例属性
    public age: number = 20; // 实例属性
    gender: string = 'male' // 实例属性

    static sex:string = '公'; // 类属性（静态属性）

    constructor(name: string) {
        this.name = name;
    }
    run() { // 实例方法
        console.log(`${this.name}在狂奔,它已经${this.age}岁了`);
    }
    eat() { // 实例方法
        console.log(`${this.name}在吃屎`);
    }
    static sexInfo(){
        console.log(this.sex) // 公
    }
}
var d = new Dog('旺财');
console.log(d.name); // 旺财
console.log(d.age); // 20
console.log(d.gender); // male
d.run(); // 旺财在狂奔,它已经20岁了
d.eat(); // 旺财在吃屎
Dog.sexInfo();
console.log(Dog.sex); // 公 
console.dir(Dog); // ƒ Dog(name)
console.log(typeof Dog); // function

// 多态： 父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
class Animal{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(){
        console.log('吃的方法')
    }
}
class Tiger extends Animal{
    constructor(name:string){
        super(name)
    }
    eat(){
        return `${this.name}吃馒头`
    }
}
class Lion extends Animal{
    constructor(name:string){
        super(name)
    }
    eat(){
        return `${this.name}吃雪糕`
    }
}
var t = new Tiger('老虎');
console.log(t.eat());
var l = new Lion('狮子');
console.log(l.eat());

// ts 中的抽象类：他是提供其他类继承的基类，不能直接被实例化
// 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
// 抽象方法只能在放在抽象类里面
// 抽象类和抽象方法用来【定义标准】
abstract class Animals{
    public name:string;
    constructor(name:string){
        this.name = name;
    }
    abstract eat():any; // 子类必须实现抽象方法
    run(){
        console.log('其他方法可以不实现')
    }
}
// var an = new Animals('ss') // 报错。 抽象类无法实现实例化
class Mouse extends Animals{
    constructor(name:string){
        super(name)
    }
    eat(){
        return `${this.name}吃粮食`
    }
}
var m = new Mouse('老鼠')
console.log(m.eat()); // 老鼠吃粮食
class Rabbit extends Animals{
    constructor(name:string){
        super(name)
    }
    eat(){
        return `${this.name}吃萝卜`
    }
}
var r = new Rabbit('兔子');
console.log(r.eat()); // 兔子吃萝卜




// 【【ts 中的接口】】
/* 
【属性类接口】， 对 json 的约束
【函数类型接口】， 对方法传入的参数以及返回值进行约束
【可索引接口】： 数组、对象的约束（不常用）
【类类型接口】: 对类的约束，和抽象类有点相似
【接口扩展】：接口可以继承接口
*/

// 【属性类接口】， 对 json 的约束
// 接口，行为和动作的规范，对批量方法进行约束
// 传入对象的约束，属性接口
interface FullName{
    firstName: string;
    secondName: string;
}
function printName(name: FullName){
    // 必须传入对象 firstName secondName
    console.log(name.firstName + '--' + name.secondName) // 张--三
}
// printName('123') // 错误
var obj = { // 传入的参数必须包含 firstName secondName
    age: 20,
    firstName: '张',
    secondName: '三'
}
printName(obj)
function printInfo(name:FullName){
    console.log(`我的姓是'${name.firstName}',名是'${name.secondName}'`) // 我的姓是'李',名是'四'
}
var info = {
    firstName: '李',
    secondName: '四'
}
printInfo(info);

// 接口，可选属性
interface FullNames{
    firstName: string;
    secondName?: string;
}
function getName(name:FullNames){
    console.log(name)
}
// 参数的顺序可以不一样
getName({
    firstName: 'firstName',
    secondName: 'secondName'
})  // {firstName: "firstName", secondName: "secondName"}
getName({
    firstName: 'firstName' 
})  // {firstName: "firstName"}
// 原生js封装ajax
interface Config{
    type: string;
    url: string;
    data?: string;
    dataType: string;
}
function ajax(config: Config){
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                console.log('success');
                if(config.dataType == 'json'){
                    console.log(JSON.parse(xhr.responseText))
                }else{
                    console.log(xhr.responseXML)
                }
            }
        }
    }
}
ajax({
    type: "get",
    url: 'http://a.itying.com/api/productlist',
    dataType: 'json' 
})

// 【函数类型接口】
// 对方法传入的参数以及返回值进行约束, 批量约束
// 加密的函数类型接口
interface encrypt{
    (key:string, value:string):string;
}
var md5:encrypt = function(key:string,value:string):string{
    // 模拟操作
    return key + value;
}
console.log(md5('name', 'zhangsan')); // namezhangsan
var sha1 = function(key:string, value:string):string{
    return `${key}+++${value}`
}
console.log(sha1('lisi','100岁')); // lisi+++100岁

// 【可索引接口】： 数组、对象的约束（不常用）
var arr11:number[] = [111,222];
var arr22:Array<string> = ['1111', '2222']
interface UserArr{
    [index:number]: string
}
var arr33:UserArr = ['aaa', 'bbb'];
console.log(arr33[0]); // aaa

interface UserObj{
    [index:string]: string
}
var obj33:UserObj = {a:'aa',b:'bb'}
console.log(obj33.b); // bb

// 【类类型接口】: 对类的约束，和抽象类有点相似
interface Animal33{
    name:string;
    eat(str:string):void;
}
class Dog33 implements Animal33{
    name: string;
    constructor(name:string){
        this.name = name;
    }
    eat(){
        console.log(this.name + '吃点啥');
    }
}
var dd = new Dog33('小黑');
dd.eat(); // 小黑吃点啥
class Cat33 implements Animal33{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(food:string){
        console.log(`${this.name}吃${food}`)
    }
}
var cc = new Cat33('小花');
cc.eat('老鼠'); // 小花吃老鼠

// 【接口扩展】：接口可以继承接口
interface Anim{
    eat():void;
}
interface Pers extends Anim{
    work():void;
}
class Programmer{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    coding(code:string){
        return `${this.name}写${code}`
    }
}
class Web11 extends Programmer implements Pers{
    constructor(name:string){
        super(name)
    }
    eat(){
        console.log(`${this.name}喜欢吃馒头`)
    }
    work(){
        console.log(`${this.name}写代码`)
    }
}
var ww = new Web11('小吴');
ww.eat(); // 小吴喜欢吃馒头
ww.work(); // 小吴写代码
console.log(ww.coding('Hello World')); // 小吴写Hello World




// 【【Typescript 中的泛型】】
// 通俗理解，泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持(类型校验)
/* 
1. 泛型函数
2. 泛型类
3. 泛型接口
*/
function getDatas(value:string):string{
    return value // 这个只能返回 string 类型
}
// 要求同时返回 string 类型和 number 类型  any 可以解决这个问题，但是 any 放弃了类型检查
// T 表示泛型，具体什么类型是调用这个方法的时候决定的

// 泛型函数
function getData11<T>(value:T):T{
    return value;
}
console.log(getData11<number>(123)); // 123
console.log(getData11<string>('123')); // 123
function getData22<T>(value:T):any{
    return '123456' + value;
}
console.log(getData22<number>(123)); // 123456123
console.log(getData22<string>('这是一个泛型')); // 123456这是一个泛型
function fn22<T, K>(a: T, b: K): T {
    console.log(b)
    return a
}
fn22<number, string>(1, '2')


// 泛型类
// 下面这种有局限性，只能传入一种数据类型
class MinClass{
    public list:number[] = [];
    add(num:number){
        this.list.push(num);
    }
    min():number{
        var minNum = this.list[0];
        for(var i = 0; i < this.list.length; i++){
            if(minNum > this.list[i]){
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}
var mm = new MinClass();
mm.add(3);
mm.add(8);
mm.add(33);
mm.add(2);
mm.add(13);
console.log(mm.min()); // 2
// 用类的泛型改造
class MinClasss<T>{
    public list:T[] = [];
    add(value: T):void{
        this.list.push(value);
    }
    min(): T{
        var minNum = this.list[0];
        for(var i = 0; i < this.list.length; i++){
            if(minNum > this.list[i]){
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}
var mmm = new MinClasss<number>(); // 实例化类， 并且制定了类的 T 代表的类型是 number
mmm.add(11);
mmm.add(144);
mmm.add(336);
console.log(mmm.min()); // 11
var mmm1 = new MinClasss<string>(); // 实例化类， 并且制定了类的 T 代表的类型是 string
mmm1.add('c');
mmm1.add('d');
mmm1.add('a');
console.log(mmm1.min()); // a

// 泛型接口
interface ConfigFn{
    (value1: string, value2:string):string;
}
var getData333: ConfigFn = function(value1:string, value2:string):string{
    return value1 + value2
}
console.log(getData333('name', 'zhangsan')); // namezhangsan
// 改造为泛型接口
// 1. 第一种写法
interface ConfigFn2{
    <T>(value: T):T;
}
var getData4: ConfigFn2 = function<T>(value:T):T{
    return value
}
console.log(getData4<number>(666));  // 666
console.log(getData4<string>('666')); // 666
// 2. 第二种写法
interface ConfigFn3<T>{
    (value: T):T;
}
function getData33<T>(value:T):T{
    return value
}
var myGetData33:ConfigFn3<string> = getData33;
console.log(myGetData33('aabb')); // aabb

// 把类作为参数类型的泛型类
class User{
    username:string | undefined;
    password:string | undefined;
}
class MysqlDb{
    add(user:User):boolean{
        console.log(user) // User {username: "张三", password: "123456"}
        return true;
    }
}
var u = new User();
u.username = '张三';
u.password = '123456';
var Db = new MysqlDb();
Db.add(u);

class ArticleCate{
    title:string | undefined;
    desc:string | undefined;
    status:number | undefined;
}
class MysqlDb11{
    add(info:ArticleCate):boolean{
        console.log(info) // ArticleCate {title: "国内", desc: "国内新闻", status: 1}
        return true;
    }
}
var a = new ArticleCate();
a.title = '国内';
a.desc = '国内新闻';
a.status = 1;
var Db1 = new MysqlDb11();
Db1.add(a);
// 改造为把类作为参数的泛型类
class MysqlDb22<T>{
    add(value:T):T{
        console.log(value)
        return value;
    }
    updated(info:T,id:number):boolean{
        console.log(info);
        console.log(id);
        return true
    }
}
class User22{
    username: string | undefined;
    password: string | undefined;
}
var uu = new User22();
uu.username = '吴崇刚';
uu.password = '456123';
var m1 = new MysqlDb22<User22>();
m1.add(uu); // User22 {username: "吴崇刚", password: "456123"}
class ArticleCate22{
    title:string | undefined;
    desc:string | undefined;
    status:number | undefined;
    constructor(params:{
        title:string | undefined;
        desc:string | undefined;
        status?:number | undefined;
    }){
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
}
var aa = new ArticleCate22({
    title: '抗击疫情',
    desc: '众志成城'
})
var m2 = new MysqlDb22<ArticleCate22>();
m2.add(aa); // ArticleCate22 {title: "抗击疫情", desc: "众志成城", status: undefined}
var a3 = new ArticleCate22({
    title: 'suizhou',
    desc: 'hubeisheng'
})
a3.status = 1;
m2.updated(a3, 12); // ArticleCate22 {title: "suizhou", desc: "hubeisheng", status: 1}  // 12




// 【【ts 类型、接口、类、泛型的综合运用案例】】
// 定义一个操作数据库的库，支持 Mysql Mssql MongoDb
interface DBI<T>{
    add(info:T):boolean;
    update(info:T, id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[];
}
    // 定义一个操作 mysql 数据库的类  注意：要实现泛型接口，这个类也应该是一个泛型类
    class MysqlDbDb<T> implements DBI<T>{
        constructor(){
            // 和数据库建立连接
        }
        add(info: T): boolean {
            console.log(info);
            return true;
        }        
        update(info: T, id: number): boolean {
            throw new Error("Method not implemented.")
        }
        delete(id: number): boolean {
            throw new Error("Method not implemented.")
        }
        get(id: number): any[] {
            throw new Error("Method not implemented.")
        }
    }
    // 定义一个操作 mssql 数据库的类
    class MsSqlDb<T> implements DBI<T>{
        constructor(){
            // 和数据库建立连接
        }
        add(info: T): boolean {
            console.log(info);
            return true;
        }       
        update(info: T, id: number): boolean {
            throw new Error("Method not implemented.")
        }
        delete(id: number): boolean {
            throw new Error("Method not implemented.")
        }
        get(id: number): any[] {
            var list = [
                {
                    title: 'xxxx',
                    desc: 'xxxxxxxxx'
                },
                {
                    title: 'xxxx',
                    desc: 'xxxxxxxxx'
                }
            ]
            return list;
        }
    }
    // 操作用户表，定义一个 user 类和数据表做映射
    class User5{
        username:string | undefined;
        password:string | undefined;
    }
    var u5 = new User5();
    u5.username = '张三';
    u5.password = '123456';
    var oMysql = new MysqlDbDb<User5>();
    oMysql.add(u5); // User5 {username: "张三", password: "123456"}
    var u6 = new User5();
    u6.username = '张三666';
    u6.password = '123456654';
    var oMssql = new MsSqlDb<User5>();
    oMssql.add(u6); // User5 {username: "张三666", password: "123456654"}
    var dataList = oMssql.get(4);
    console.log(dataList); // (2) [{…}, {…}] 
    /* 
    0: {title: "xxxx", desc: "xxxxxxxxx"}
    1: {title: "xxxx", desc: "xxxxxxxxx"}
    */




// 【【typescript 模块 模块化】】。和 es6 是一样的
/* 
import save, { getData123 as get, dbUrl} from './modules/db'
getData123();
get();
save();
console.log(dbUrl);
 */




// 【【typescript 命名空间】】
/* 命名空间和模块的区别：
    命名空间：内部模块，主要用于组织代码，避免命名冲突
    模块：ts 的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间
*/
namespace A{
    interface Animal33{
        name:string;
        eat(str:string):void;
    }
    export class Dog33 implements Animal33{
        name: string;
        constructor(name:string){
            this.name = name;
        }
        eat(){
            console.log(this.name + '不吃屎');
        }
    }
    
    export class Cat33 implements Animal33{
        name:string;
        constructor(name:string){
            this.name = name;
        }
        eat(food:string){
            console.log(`${this.name}想吃${food}`)
        }
    }
}
var ddd = new A.Dog33('小黑');
ddd.eat(); // 小黑不吃屎
var ccc = new A.Cat33('小花');
ccc.eat('鱼'); // 小花想吃鱼

namespace B{
    interface Animal33{
        name:string;
        eat(str:string):void;
    }
    export class Dog33 implements Animal33{
        name: string;
        constructor(name:string){
            this.name = name;
        }
        eat(){
            console.log(this.name + '还是不吃屎');
        }
    }
    
    export class Cat33 implements Animal33{
        name:string;
        constructor(name:string){
            this.name = name;
        }
        eat(food:string){
            console.log(`${this.name}已经不想吃${food}`)
        }
    }
}
var d11 = new B.Dog33('小黑');
d11.eat(); // 小黑还是不吃屎
var c11 = new B.Cat33('小花');
c11.eat('鱼'); // 小花已经不想吃鱼 

// 上述的命名空间的代码也可以抽离出去，模块化，一个模块里面可能有多个命名空间
// 如：抽离到 modules 下面的 a.ts 里面去
/* 
import {Aa, Bb} from './modules/a'
var a22 = new Aa.Dog33('小黑黑');
a22.eat();
var b22 = new Bb.Dog33('小花花');
b22.eat();

 */




// 【【typescript 装饰器】】
// 装饰器：装饰器是一种特殊类型的声明，它能够附加到类声明，方法，属性或参数上，可以修改类的行为。
// 【通俗的讲装饰器就是一个方法，可以注入到类、方法、属性、参数上来扩展类、属性、方法、参数的功能】
/* 
    类装饰器
    属性装饰器
    方法装饰器
    参数装饰器
*/
// 1. 类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视、修改或替换类定义
// 1.1 类装饰器,普通装饰器（无法传参）
function logClass(params:any){
    console.log(params); // 普通装饰器这里 params 就是当前类
    /* 
    ƒ HttpClient() {
    }
    */
    // params 就是当前类
    params.prototype.apiUrl = 'xxxxx';
    params.prototype.run = function(){
        console.log('我是一个run方法');
    }
}
@logClass
class HttpClient{
    constructor(){

    }
    getData(){

    }
}
var h:any = new HttpClient();
console.log(h.apiUrl); // xxxxx
h.run(); // 我是一个run方法

// 1.2 类装饰器,装饰器工厂（可传参）
function logClass1(params:string){
    return function(target:any){
        console.log(target); // 打印的是这个类
        /* 
        ƒ HttpClient1() {
        }
        */
        console.log(params); // hello
        target.prototype.ttt = params;
    }
}
@logClass1('hello')
class HttpClient1{
    constructor(){

    }
    getData(){

    }
}
var hh:any = new HttpClient1();
console.log(hh.ttt); // hello

function logClass2(target:any){
    console.log(target);
    return class extends target{
        apiUrl2:any = '我是修改后的数据';
        getData(){
            this.apiUrl2 = this.apiUrl2 + '=====';
            console.log(this.apiUrl2);
        }
    }
}
@logClass2
class HttpClient2{
    public apiUrl2:string | undefined;
    constructor(){
        console.log('我是构造函数里的 apiUrl2'); // 我是构造函数里的 apiUrl2
    }
    getData(){
        console.log(this.apiUrl2)
    }
}
var h2 = new HttpClient2();
console.log(h2.apiUrl2); // 我是修改后的数据
h2.getData(); // 我是修改后的数据===== 

// 2. 属性装饰器
// 下面这个是类装饰器
function logClass3(params:string){
    return function(target:any){
        console.log(target); // // 打印的是这个类
        /* 
            ƒ HttpClient3() {
            }
        */
        console.log(params); // 这里的 params 就是装饰器传入的参数
        /* 
            hello world
        */
    }
}
// 下面这个是属性装饰器
function logProperty(params:any){
    return function(target:any, attr:any){
        console.log(target); // 属性装饰器这里的第一个参数 target 打印的是原型对象
        /* 
            {getData: ƒ, constructor: ƒ}
                getData: ƒ ()
                url: "123456"
                constructor: ƒ HttpClient3()
                __proto__: Object
        */
        console.log(attr); // url    第二个参数 attr 是运用装饰器的那个属性
        target[attr] = params;
    }
}
@logClass3('hello world')
class HttpClient3{
    @logProperty('123456')
    public url:any | undefined;
    constructor(){

    }
    getData(){
        console.log(this.url); // 123456
    }
}
var h3 = new HttpClient3();
h3.getData(); 

// 3. 方法装饰器
// 装饰器
function logMethod(params:any){
    return function(target:any, methodName:any, desc:any){
        console.log(target); // 原型对象
        /* 
            {getData: ƒ, constructor: ƒ}
                getData: ƒ ()
                constructor: ƒ HttpClient4()
                __proto__: Object
        */
        console.log(methodName); // 方法名
        /* 
            getData
        */
        console.log(desc); // 描述对象
        /* 
            {writable: true, enumerable: true, configurable: true, value: ƒ}
                value: ƒ ()
                writable: true
                enumerable: true
                configurable: true
                __proto__: Object
        */
       var oMethod = desc.value;
       desc.value = function(...args:any[]){
           args = args.map((value)=>{
               return String(value)
           })
           console.log(args); // ["123", "456"]
           oMethod.apply(this, args);
       }
    }
}
class HttpClient4{
    public url:any | undefined;
    constructor(){

    }
    @logMethod('www.baidu.com')
    getData(...args:any[]){
        console.log(args); // ["123", "456"]
        console.log('我是 getData 里面的方法'); // 我是 getData 里面的方法
    }
}
var h4 = new HttpClient4();
h4.getData(123, '456');

// 4. 方法参数装饰器
function logParams(params:any){
    return function(target:any, methodsName:any, paramsIndex:any){
        console.log(params); // 传入的参数
        /* 
            xxxxxx
        */
        console.log(target); // 原型对象
        /* 
            {getData: ƒ, constructor: ƒ}
                getData: ƒ (uuid)
                constructor: ƒ HttpClient5()
                __proto__: Object
        */
        console.log(methodsName); // 这个参数所在的方法名
        /* 
            getData
        */
        console.log(paramsIndex); // 参数在函数参数列表中的索引
        /* 
            0
        */
        target.apiUrl = 'ooooo'
    }
}
class HttpClient5{
    public url:any | undefined;
    constructor(){

    }
    getData(@logParams('xxxxxx') uuid:any){
        console.log(uuid); // 123456
    }
}
var h5:any = new HttpClient5();
h5.getData(123456);
console.log(h5.apiUrl); // ooooo

// 装饰器的执行顺序
// 属性装饰器 > 方法装饰器 > 方法参数装饰器 > 类装饰器
// 【注意】：并且，同一种类型的装饰器，后面的比前面的先执行 
function logClass6(params:any){
    return function(target:any){
        console.log('这是类装饰器1')
    }
}
function logClass7(params:any){
    return function(target:any){
        console.log('这是类装饰器2')
    }
}
function logAttrbute(params?:any){
    return function(target:any, attr:any){
        console.log('这是属性装饰器')
    }
}
function logMethods6(params?:any){
    return function(target:any, methodsName:any, desc:any){
        console.log('这是方法装饰器')
    }
}
function logParams6(params?:any){
    return function(target:any, methodsName:any, paramsIndex:any){
        console.log('这是方法参数装饰器1')
    }
}
function logParams7(params?:any){
    return function(target:any, methodsName:any, paramsIndex:any){
        console.log('这是方法参数装饰器2')
    }
}
@logClass6('xxx')
@logClass7('xxx')
class HttpClient7{
    @logAttrbute()
    public url:string | undefined;
    constructor(){

    }
    @logMethods6()
    getData(){

    }
    setData(@logParams6()@logParams7() props:any){

    }
}
/* 
打印结果为：
    这是属性装饰器
    这是方法装饰器
    这是方法参数装饰器2
    这是方法参数装饰器1
    这是类装饰器2
    这是类装饰器1
 */

