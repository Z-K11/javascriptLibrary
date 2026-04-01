let library = [];
function makeBook (name,author,totalPages,yearOfRelease,read)
{
    this.name=name;
    this.author=author;
    this.totalPages=totalPages;
    this.yearOfRelease=yearOfRelease;
    this.read=read
    this.uid=crypto.randomUUID();
    console.log(`${this.name} stored succesfully`);
}
function addBookToLibrary(name,author,totalPages,yearOfRelease,read)
{
    book=new makeBook(name,author,totalPages,yearOfRelease,read);
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
    if(!bookName.value||!authorName.value||isNaN(bookPages.value)||isNaN(releaseYear.value))
    {
        alert("Invalid or No Input");
        return;
    }
    addBookToLibrary(bookName.value,authorName.value,bookPages.value,releaseYear.value,document.querySelector('input[type="radio"]:checked').value);
    modalOverlay.classList.add("hidden");
    inputFields.forEach(input => input.value="");
    console.log(library);
    let toggleStatus = document.createElement("button");
    let newRow=table.insertRow(-1);
    let cell1 = newRow.insertCell(0);    
    let cell2 = newRow.insertCell(1);    
    let cell3 = newRow.insertCell(2);    
    let cell4 = newRow.insertCell(3);    
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    cell1.textContent=library[library.length-1].name;
    cell2.textContent=library[library.length-1].author;
    cell3.textContent=library[library.length-1].totalPages;
    cell4.textContent=library[library.length-1].yearOfRelease;
    cell5.textContent=library[library.length-1].read;
    cell6.appendChild(toggleStatus);
    toggleStatus.textContent="Toggle";
    toggleStatus.classList.add("addBook");
    toggleStatus.style.fontSize="2rem";
});