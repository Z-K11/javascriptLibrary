let library = [];
function makeBook (name,author,totalPages,yearOfRelease,read)
{
    this.name=name;
    this.author=author;
    this.totalPages=totalPages;
    this.yearOfRelease=yearOfRelease;
    this.read=read
    this.uid=crypto.randomUUID;
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
cancelSubmission.addEventListener("click",()=>
{
    modalOverlay.classList.add("hidden");
    inputFields.forEach(input => input.value="");
})
submitButton.addEventListener("click",()=>
{
    modalOverlay.classList.remove("hidden");
})
console.log("Script Is Working");