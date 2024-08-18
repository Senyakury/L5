"use strict"
class Circle{
    readonly color:string
    readonly name:string
    radius:number
    
    constructor(color:string, name:string, radius:number){
        this.color = color
        this.name = name
        this.radius = radius
    }
    public calculatearea():number{
        return Math.PI * Math.pow(this.radius,2)
    }
    
}
class Rectangle{
    readonly color:string
    readonly name:string
    a:number
    b:number
    constructor(color:string, name:string, a:number,b:number){
        this.color = color
        this.name = name
        this.a = a
        this.b = b
    }
    public calculatearea():number{
        return this.a * this.b
    }
    print():void{
        console.log(`The area of Rectangle is a * b = ${this.a} * ${this.b}`)
    }
}
class Square{
    readonly color:string
    readonly name:string
    a :number
    constructor(color:string, name:string, a:number){
        this.color = color
        this.name = name
        this.a = a
    }
    public calculatearea():number{
        return Math.pow(this.a, 2)
    }   
    print():void{
       console.log(`The area of Square have Formula a in power of 2 =  ${this.a} * ${this.a}`) 
    }
}
class Triangle{
    readonly color:string
    readonly name:string
    a:number
    height:number

    constructor(color:string, name:string, a:number, height:number){
        this.color = color
        this.name = name
        this.a = a
        this.height = height
    }

    public calculatearea():number{
        return (this.a*this.height)/2
    }    
    
}
