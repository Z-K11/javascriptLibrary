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