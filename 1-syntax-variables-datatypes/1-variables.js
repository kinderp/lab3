/*
    Rules for variables in Javascript
    
    Javascript variables are type dynamic!!!

    1. Name can contains
       - letters
       - digits
       - $ (dollar sign)
       - _ (underscore)


    2. Cannot start a name with a digit

    3. Name are case sensitivi
        name =! Name

    4. Variables' name starts with a lower case letter
       and they are camelCase (no dash or underscore to
       separate words)
        firstName (OK)
        firstname (NOOOO!!!)
  
    ****************************************************

    We are 3 keywords to define a variable
    - let
    - const
    - var (is obsolete, please DO NOT USE THAT!!!)
*/

let firstName = "Antonio"; // string
let lastName = "Caristia"; // string
let old = 39; // number
let dateBirth = new Date("June 15, 1984"); // a date object

// while changing a value we don't new let anymore
old = 40;

// using const to crare a constant variable
const fiscalCode = "ABC123U"
fiscalCode = "ERROR it's a constant variable"