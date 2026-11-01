

const BookDetailsPage = async ({params}) => {
    const {bookId} = await params;

    const res = await fetch(`http://localhost:5000/books/${bookId}`);
    //console.log("existing book",book);

    const {id, title, author, publishedYear, description} = await res.json();
    
    return (
        <div>
           <h3>This is book details page</h3> 
           <h4 className="text-3xl font-bold">Title: {title}</h4>
           <p>Author: {author}</p>
           <p>Publish Year: {publishedYear}</p>
           <p>Description: {description}</p>
        </div>
    );
};

export default BookDetailsPage;