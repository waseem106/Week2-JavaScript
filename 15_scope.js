// block scope    let and const
// function scope var,let and const
//global scope     variables decalred outside functions and blocks are global scoped



function one(){
    const username="waseem"

    function two()
    {
        const website="youtube"
        console.log(username)
    }
    console.log("website")
    two()
}
one()