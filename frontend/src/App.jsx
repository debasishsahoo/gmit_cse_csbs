import PropsBasic from "./components/PropsBasic";
import ValueProps from "./components/ValueProps";
import "./App.css";
function App() {
  let anyValue = "JAVASCRIPT"+"2.0"
  return (
    <>
      <PropsBasic name="Debasish" title="Sahoo" />
      <ValueProps 
      strData="this is String Value" 
      numData={123}
      boolData={false}
      objData={{name:"Deb",title:"Sahoo"}}
      arrData={[1,2,3,4,5,6,7,8]}
      jsxData={2+2+4+8-3}
      anyData={anyValue}
      />
    </>
  );
}

export default App;
