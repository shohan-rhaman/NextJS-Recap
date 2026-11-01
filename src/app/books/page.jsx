import BookCard from "@/components/BookCard";

/*
    1. cache: no-store -> it will fetch the data on every request. and it will not cache the data. (SSR).

    2. cache: force-cache -> it will catch the data, and it will not fetch the data on every request. (SSG)>(Static Site Generation).

    3. cache: revalidate: 20 -> it will cache the data for 20 seconds, and it will fetch the data after 20s. (ISR)>(Incremental Static Regeneration).

    Static Site Generation (SSG) is a rendering method in Next.js where your web pages are fully generated into static HTML files at build time (when you run next build), rather than on every single user request.


*/




const getBooks = async ()=>{
    const res = await fetch("http://localhost:5000/books", 
        {cache: "no-cache"}
    );
    return res.json();
}

const BooksPage = async () => {
    const books = await getBooks();
    return (
        <div>
           <h3>This is our Books pages</h3> 
            <p>Books length: {books.length}</p>
            <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto mt-10">
                {
                    books.map(book => <BookCard key={book.id} book={book}/>)
                }
            </div>
        </div>
    );
};

export default BooksPage;