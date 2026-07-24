let library = [];
class myBook
{
    #uid;
    constructor(name,author,totalPages,yearOfRelease,read)
    {
        this.name=name;
        this.author=author;
        this.totalPages=totalPages;
        this.yearOfRelease=yearOfRelease;
        this.read=read;
        this.#uid=crypto.randomUUID();
        console.log(`The Book ${this.name} successfuly added to the library`);
    }
    get uid()
    {
        return this.#uid;
    }
}
// function makeBook (name,author,totalPages,yearOfRelease,read)
// {
//     this.name=name;
//     this.author=author;
//     this.totalPages=totalPages;
//     this.yearOfRelease=yearOfRelease;
//     this.read=read
//     this.uid=crypto.randomUUID();
//     console.log(`${this.name} stored succesfully`);
   
// }
// makeBook.prototype.returnid= function()
// {
//     return this.uid;
// }
function addBookToLibrary(name,author,totalPages,yearOfRelease,read)
{
    let book=new myBook(name,author,totalPages,yearOfRelease,read);
    library.push(book);
}
let submitButton = document.querySelector(".addBook");
let modalOverlay=document.querySelector(".modal-overlay");
let inputFields=document.querySelectorAll("input");
let cancelSubmission = document.querySelector(".cancelButton");
let bookCreator=document.querySelector(".createBook");
let bookName=document.querySelector("#name");
let authorName=document.querySelector("#author");
let bookPages=document.querySelector("#pages");
let releaseYear = document.querySelector("#bookRelease");
let table=document.querySelector("tbody");

cancelSubmission.addEventListener("click",()=>
{
    modalOverlay.classList.add("hidden");
    inputFields.forEach(input => input.value="");
});
submitButton.addEventListener("click",()=>
{
    modalOverlay.classList.remove("hidden");
});
console.log("Script Is Working");
bookCreator.addEventListener("click",()=>
{
    if(!bookName.value||!authorName.value||isNaN(bookPages.value)||isNaN(releaseYear.value)||document.querySelector('input[type="radio"]:checked')===null)
    {
        alert("Invalid or No Input");
        return;
    }
    console.log(document.querySelector('input[type="radio"]:checked'));
    console.log(document.querySelector('input[type="radio"]:checked').value);
    addBookToLibrary(bookName.value,authorName.value,bookPages.value,releaseYear.value,document.querySelector('input[type="radio"]:checked').value);
    modalOverlay.classList.add("hidden");
    inputFields.forEach(input =>
    {
        if(input.type==="radio")
            input.checked="false";
        else
            input.value="";
    }
    );
    console.log(library);
    let toggleStatus = document.createElement("button");
    let removeBook = document.createElement("button");
    removeBook.dataset.action='remove';
    removeBook.dataset.uid=library[library.length-1].uid;
    toggleStatus.dataset.action='toggle';
    toggleStatus.dataset.uid=library[library.length-1].uid;
    let newRow=table.insertRow(-1);
    let cell1 = newRow.insertCell(0);    
    let cell2 = newRow.insertCell(1);    
    let cell3 = newRow.insertCell(2);    
    let cell4 = newRow.insertCell(3);    
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);
    cell1.textContent=library[library.length-1].name;
    cell2.textContent=library[library.length-1].author;
    cell3.textContent=library[library.length-1].totalPages;
    cell4.textContent=library[library.length-1].yearOfRelease;
    cell5.textContent=library[library.length-1].read;
    cell6.appendChild(toggleStatus);
    cell7.appendChild(removeBook);
    toggleStatus.textContent="Toggle";
    removeBook.textContent="x";
    removeBook.classList.add("removeButton");
    toggleStatus.classList.add("removeButton");
    toggleStatus.style.fontSize="1.5rem";
    toggleStatus.style.padding="0.1 1rem";
});
table.addEventListener("click",(e)=>
{
    const bookId=e.target.dataset.uid;
    if(e.target.dataset.action==='remove')
    {
        library=library.filter(book => book.uid !==bookId);
        e.target.closest('tr').remove();
    }
    if(e.target.dataset.action==='toggle')
    {
        const found = library.find(book=>book.uid===bookId);
        if(found.read==='Yes')
        {
            found.read='No';
            e.target.closest('tr').cells[4].textContent='No';
        }
        else
        {
            found.read='Yes';
            e.target.closest('tr').cells[4].textContent='Yes';
        }
    }
});
const form = document.querySelector('.modal');
const nameError = document.querySelector("#nameError");
const authorError = document.querySelector('#authorError');
const pagesError = document.querySelector('#pageError');
const releaseError = document.querySelector('#releaseError');
const onlyNumbersAllowedRegex=/[^0-9]/;
function checkNames(name,error,msg)
{
    if(name.value.trim()==="")
    {
        error.textContent=`${msg} name cannot be empty`;
        error.classList.add('error');
        name.classList.add('displayingError');
    }
    else
    {
        error.textContent='';
        error.classList.remove('error');
        name.classList.remove('displayingError');
    }

}
function checkNumbers(name,error,msg)
{
    if(name.value.length>4)
    {
        name.classList.add('displayingError');
        error.textContent=`${msg} cannot be longer than 4 digits`;
        error.classList.add('error');
    }
    else if (onlyNumbersAllowedRegex.test(name.value))
    {
        name.classList.add('displayingError');
        error.textContent=`${msg} can only be numbers`;
        error.classList.add('error');
    }
    else
    {
        name.classList.remove('displayingError');
        error.textContent='';
        error.classList.remove('error');
    }

}
form.addEventListener('input',event=>
{
    const target = event.target.id;
    switch (target) {
        case "name":
            checkNames(bookName,nameError,"Book");
            break;
        case "author":
            checkNames(authorName,authorError,"Author");
            break;
        case "pages":
            checkNumbers(bookPages,pagesError,"Pages");
            break;
        case "bookRelease":
            if(releaseYear.value.length<4)
            {
                releaseError.textContent="Release Year cannot be lesst than 4 digits";
            }
            else
                checkNumbers(releaseYear,releaseError,'Release Year');
            default:
            break;
    }
}
)