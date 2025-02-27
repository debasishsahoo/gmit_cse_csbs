import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Services from "./components/Services";
import Gallary from "./components/Gallary";
import MenuLink from "./components/MenuLink";
import Stats from "./components/Stats";
import "./App.css";
function App() {
  const HeaderData = {
    title: "Changing the World Through Design",
    desc: "This is the Second Project Using React",
  };
  const ContentData = {
    title: "Our Agency, Our Selves.",
    desc: "This React project dynamically renders content using props and arrays. The `App.jsx` file stores data for components like **Content, Services, Stats, Gallery, and MenuLink** in structured arrays. These components use `.map()` to iterate over the data, ensuring flexibility and easy updates. By passing props, the project eliminates hardcoded values, making it scalable and efficient.",
    imgUrl: "https://dummyimage.com/600x400/000/fff",
    altText: "Agency Image",
  };

  const ServicesData = [
    {
      title: "Photoshop",
      desc: "Expert photo editing and designing services.",
    },
    {
      title: "Javascript",
      desc: "Building interactive and dynamic web applications.",
    },
    {
      title: "Marketing",
      desc: "Strategic marketing solutions to boost your brand.",
    },
    {
      title: "App Dev",
      desc: "Mobile App Dev.",
    },
    {
      title: "Crab Export",
      desc: "New Crab Export",
    },
  ];

  return (
    <>
      <div className="container">
        <Header data={HeaderData} />
        <Content data={ContentData} />
        <Services data={ServicesData}/>
        <Stats />
        <hr />
        <div className="row column">
          <h3>Our Recent Work</h3>
        </div>
        <Gallary />
        <hr />
        <MenuLink />
        <Footer />
      </div>
    </>
  );
}

export default App;
