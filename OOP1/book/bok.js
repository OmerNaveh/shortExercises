class BookList{
    constructor(_read, _notRead, _next, _current, _last, _arr){
            this.read = _read;
            this.notRead = _notRead;
            this.next = _next;
            this.current = _current;
            this.last = _last;
            this.arr= _arr
            }        
    add(book){
        if(!this.arr.includes(book)){
            this.arr.push(book);
            if(book.read){this.read++;}
            else {this.notRead++};
            console.log('book added!')
        }
        else console.log('this book already exists!')
    }
    finishCurrentBook(){
        const currentBook =this.current;
        currentBook.read = true;
        currentBook.date= new Date(Date.now());
        this.read ++;
        this.notRead--;
        this.last = currentBook;
        this.current = this.next;
        console.log(`yay you finished ${currentBook.title}!`)
        console.log(`You should now start reading ${this.current.title}!`)
        for(let book of this.arr){
            if(book !==this.current){
                if(book.read === false){
                    this.next =book;
                    console.log(`Your next book was updated to ${this.next.title}!`)
                    return;
                }
            }
        }
    }
}
class Book{
    constructor(_title, _genre, _author, _read, _date){
        this.title = _title
        this.genre = _genre
        this.author = _author
        this.read = _read
        this.date = _date
    }
}

const a1= new Book('Harry Potter', 'Magic', 'J.K', false , undefined);
const a2= new Book('Tiras Ham', 'Hot', 'Moshe', false, undefined);
const a3= new Book('Moshes Arc', 'Bible', 'GOD', false, undefined);
const arr = [a1,a2]
const myLibrary = new BookList(1,5, a1, a2 , undefined, arr);
myLibrary.add(a3);
myLibrary.finishCurrentBook()
console.log(myLibrary)