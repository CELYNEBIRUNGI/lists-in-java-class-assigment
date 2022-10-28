
var names = ["monday","tuesday","wednesday","thursday",""]
function listdown(){
    var startlist = "<ul>";
    var endlist = "</ul>";





const firstNameInput = document.getElementById("firstName")
const lastNameInput = document.getElementById("lastName")
const emailInput = document. getElementById("email")
const  savebtn =document.getElementById("savebtn")
const lists= document.getElementsByClassName("lists")
const getElementValue = ( element) => {
        return element.value

}

savebtn.addEventListener( "click", (event) =>{

        event.preventDefault();

        const firstNameInput = document.getElementById(firstNameInput)
        const lastNameInput = document.getElementById(lastNameInput)
        const emailInput = document.getElementById(emailInput)
        
        const lists= document.createElement("ol")
        
        const firstNameTd= document.createElement("li")
        firstNameTd.innerHTML = firstNameValue
        lists.appendChild(lists)
   
        
        
        const lastNameTd= document.createElement("li")
        lastNameTd.innerHTML = lastNameValue
        lists.appendChild(lists)

        lists.appendChild(lists)




        const emailAdress= document.createElement("ol")
        emailAdress.innerHTML = lastNameValue
        lists.appendChild(emailAdress)
         
             lists.appendChild(li)
        

}
