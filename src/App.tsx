//import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Featurette from "./components/Featurette";
import About from "./components/About";
import ContactUs from "./components/Contact";

function App() {
  //let items = ["New York", "Japan", "Korea", "New Zealand", "Canada"];
  //const handleSelectItem = (item: string) => console.log(item);
  //const [modalState, setModalState] = useState(false);

  return (
    <>
      <div className="container">
        <NavBar />
        <Banner />
      </div>
      <main role="main" className="container">
        <div className="container marketing">
          <div
            className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"
            id="featuredtopics"
          >
            <h1 className="display-4">Featured</h1>
            <p className="lead">
              This section is about the featured topics of the owner
            </p>
          </div>
          <Featurette />
          <Featurette />
          <Featurette />
          <hr className="featurette-divider"></hr>
        </div>
        <About />
        <hr className="featurette-divider"></hr>
        <div className="container">
          <ContactUs />
        </div>
      </main>
      <Footer />

      {/* <Alert
        onClose={() => setModalState(false)}
        visibility={modalState ? "show" : "hide"}
      >
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
      </Alert>
      <LoginForm />
      <Button onClick={() => setModalState(true)}>Show Modal</Button> */}
      {/* <ListGroup
        items={items}
        heading="Countries"
        onSelectItem={handleSelectItem}
      /> */}
    </>
  );
}
export default App;
