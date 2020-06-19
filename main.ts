export default function(){
    
    interface Istate {
        name: string,
        age?: number,
        [propsName:string]: any,
        readonly sex?: string
    }
    
    var obj1:Istate;
    obj1 = {name: 'zs'}
    
    var obj2:Istate = {name: 'lisi'}
    
    var obj3:Istate = {
        name: 'wangwu',
        height: 178,
        isMarry: false
    }
    
    var obj4:Istate = {
        name: 'zhaoliu',
        sex: 'man'
    }
    // obj4.sex = 'nv'
    
    var a1:number[] =[1,2,3]
    var a2:string[] = ['1','2'] 
    var a3:any[] = [1,'2',true]

    var a4:Array<string> = ['1','2']

    interface Ista {
        user: string,
        age: number
    }

    interface IArr {
        [index:number]: Ista
    }
    var a5:IArr = [{user:'zs',age:12},{user:'ls',age:12}]
    var a6:Array<Ista> = [
        {user: 'ww', age: 14},
        {user: 'zl',age: 16}
    ]
    var a7:Ista[] = [{user:'qw',age:15}] 

    function funcType(name:string,age:number):number{
        return age
    }
    var ageNum:number = funcType('zs',18);

    function funcType2(name:string,age:number,sex?:string):number{
        return age
    }
    var ageNum2:number = funcType2('ls',12);

    function funcType3(name:string,age:number=19):number{
        return age
    }
    var ageNum3:number = funcType3('wangwu')
    var ageNum3:number = funcType3('wangwu',20)

    interface funcType4 {
        (name:string, age:number):number
    }
    var funcType4:funcType4 = function(name:string,age:number){
        return age
    }

    function getValue(value:number):number;
    function getValue(value:string):string;
    function getValue(value:number|string):number|string{
        return value
    } 
    var val1:number = getValue(1)
    var val2:string = getValue('1')

    function getAssert(name:string|number){
        // return (<string>name).length
        return (name as string).length
    }

    var str:string|number = '10'
    type strType = string|number;
    var str1:strType = '20'
    str1 = 30

    interface muchType1 {
        name: string
    }
    interface muchType2 {
        age: number
    }
    type muchType = muchType1 | muchType2
    var obj5:muchType = {
        name: 'zs'
    } 
    var obj6:muchType = {
        age:20
    }

    type sex = '男'|'女'
    function getSex(s:sex):string{
        return s
    }
    var sex1:string = getSex('女')

    enum Days{
        Sun,
        Mon,
        Tue,
        Wed,
        Thu,
        Fri,
        Sat
    }
    console.log(Days.Sun) // 1
    console.log(Days.Sat) // 6

    class Person{
        private name='zs'
        public age=19
        protected sex(){

        }
        say(){
            console.log(this.name,this.age,this.sex)
        }
    }
    var p = new Person();
    p.say()
    // console.log(p.name)

    class Child extends Person{
        callParent(){
            console.log(super.sex)
            // super.say()
        }
    }
    var c = new Child()
    c.callParent()
    // console.log(c.name)
    console.log(c.age)

    function createArray(length:number,value:any):Array<any>{
        let arr = []
        for(var i = 0; i < length; i++){
            arr[i] = value
        }
        return arr
    }
    function createArray1<T>(length:number,value:T):Array<T>{
        let arr = []
        for(var i = 0; i < length; i++){
            arr[i] = value
        }
        return arr
    }
    var strArry: string[] = createArray1(3,'1')
    var strArry1: string[] = createArray1<string>(3,'1')

    interface Icreate{
        <T>(name:string,value:T):Array<T>
    }
    let func:Icreate = function<T>(name:string,value:T):Array<T>{
        return []
    }
    let res:number[] = func<number>('zs',12)
    let res1:string[] = func<string>('ls','as')
}