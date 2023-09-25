import "./App.css";
import { WelcomeMessage } from "../src/components/WelcomeMessage/WelcomeMessage";
import { ProductInfo } from "../src/components/ProductInfo/ProductInfo";
import { MovieDirectorList } from "../src/components/MovieDirectorList/MovieDirectorList";
import { UserList } from "../src/components/UserList/UserList";
import { UserProfile } from "../src/components/UserProfile/UserProfile";
import products from "../src/data/products.json";
import event from "../src/data/event.json";
import { users } from "../src/data/usersNames.js";
import { EventMessage } from "../src/components/EventMessage/EventMessage";
import book from "../src/data/book.json";
import { BookInfo } from "../src/components/BookInfo/BookInfo";
import { CurrencyConverter } from "../src/components/CurrencyConverter/CurrencyConverter";

// const profile = {
//   name: "Olga",
//   age: 25,
//   city: "Vinnytsia",
// };

const ButtonContainer = (props) => {
  const {color, children} = props

  const boxStyle ={
    backgroundColor: color,
    borderRadius: "5px",
    padding: "10px"
  }
   return (
    <div style={boxStyle}>
      {children}
    </div>
   )


};

function App() {
  return (
    <div className="App">
      <ButtonContainer color={'#000000'}>
        <button>click me!</button>
      </ButtonContainer>

      <ButtonContainer color={'#fafa'}>
        <button>click 2</button>
      </ButtonContainer>


      {/* <h1 className="header">REACT HOMEWORK 1</h1>
      <WelcomeMessage userName="Yana" />

      {/* <ProductInfo /> */}

      {/* <h2 className="component-name">Component 'ProductInfo'</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductInfo {...product} />
          </li>
        ))}
      </ul>
      <MovieDirectorList />
      <UserList userNames={users} />
      <UserProfile profile={profile} />
      <EventMessage descr={event.description} date={event.date} />
      <BookInfo
        name={book.title}
        author={book.author}
        year={book.publicationYear}
      />
      <CurrencyConverter amount={500} exchangeRate={40} />  */}
    </div>
  );
}

export default App;
