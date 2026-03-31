let library = [];
function makeBook (name,author,totalPages,yearOfRelease,uid)
{
    this.name=name;
    this.author=author;
    this.totalPages=totalPages;
    this.yearOfRelease=yearOfRelease;
    this.uid=uid;
    console.log(`${this.name} stored succesfully`);
}
function addBookToLibrary(name,author,totalPages,yearOfRelease,uid)
{
    book=new makeBook(name,author,totalPages,yearOfRelease,uid);
    library.push(book);
}