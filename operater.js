//arithmetic
var a=10
var b=20
console.log(a+b) //addition
console.log(a-b) //subtraction
console.log(a*b) //multiplication
console.log(a/b) //division
console.log(a%b) //modulus
console.log(a**b)//exponentiation
 
console.log("Assignment operator")
var c=30
console.log(a+=30)
console.log(a-=30)
console.log(a*=30)
console.log(a/=30)
console.log(a%=30)
console.log(a**=30)

//comparision
console.log("Comparision Operator")
var a=5
var b=3
console.log(a==b)
console.log(a!=b)
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)

//logical
console.log("Logical Operator")
console.log(a>1 && b>1)
console.log(a>1 || b>0)
console.log(a>0)

//unary
console.log("Unary Operator")
console.log(c++)
console.log(c--)
console.log(--c)
console.log(++c)
 
//ternary
console.log("Ternary Operator")
var result =(a>b) ? "a is greater" : "b is greater"
console.log(result)