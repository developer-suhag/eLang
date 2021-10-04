// import fonts
import "@fontsource/montserrat/400.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/700.css";
// animate css
import "animate.css";
import { createContext, useEffect, useState } from "react";
// import necessery components
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import CourseDetail from "./components/CourseDetail/CourseDetail";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Services from "./components/Services/Services";

export const CoursesContext = createContext([]);

function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const loadCourses = async () => {
      const res = await fetch("./instructors.JSON");
      const data = await res.json();
      setCourses(data);
    };
    loadCourses();
  }, []);
  return (
    <div className="App">
      <CoursesContext.Provider value={courses}>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/courses">
              <Services></Services>
            </Route>
            <Route exact path="/course/:courseId">
              <CourseDetail></CourseDetail>
            </Route>
            <Route exact path="/about-us">
              <About></About>
            </Route>
            <Route exact path="/contact-us">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </CoursesContext.Provider>
    </div>
  );
}

export default App;
