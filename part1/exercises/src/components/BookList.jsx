export default function BookList() {

   let pageTitle = "Book Title Page";
   let book1 = "https://m.media-amazon.com/images/I/61yhZ8TKwwL._AC_UF1000,1000_QL80_.jpg"
   let book2 = "https://m.media-amazon.com/images/I/61kOvk8yzYL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/71sERFosMeL._AC_UF894,1000_QL80_.jpg";

   return (
      <div>
      <h3>{pageTitle}</h3>
      <img src={book1} alt="The art of letting go" width="120" height="120"/>
      <img src={book2} alt="you become what you think"  width="120" height="120"/>
      <img src={book3} alt="Learning how to fly"  width="120" height="120"/>
      </div>      
   );
}