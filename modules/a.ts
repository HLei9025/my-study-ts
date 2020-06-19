
export namespace Aa{
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


export namespace Bb{
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

