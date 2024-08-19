"use strict"
class Shape {
    readonly color:string
    readonly name:string
    constructor(color:string,name:string){
        this.color = color
        this.name = name
    }
}

class Circle extends Shape{

    radius:number
    
    constructor(color:string, name:string, radius:number){
        super(name,color)
        this.radius = radius
    }
    public calculatearea():number{
        return Math.PI * Math.pow(this.radius,2)
    }
    
}
class Rectangle extends Shape{
    a:number
    b:number
    constructor(color:string, name:string, a:number,b:number){
        super(color,name)
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
class Square extends Shape{
    a :number
    constructor(color:string, name:string, a:number){
        super(color,name)
        this.a = a
    }
    public calculatearea():number{
        return Math.pow(this.a, 2)
    }   
    print():void{
       console.log(`The area of Square have Formula a in power of 2 =  ${this.a} * ${this.a}`) 
    }
}
class Triangle extends Shape{
    a:number
    height:number

    constructor(color:string, name:string, a:number, height:number){
        super(color,name)
        this.a = a
        this.height = height
    }

    public calculatearea():number{
        return (this.a*this.height)/2
    }    
    
}
