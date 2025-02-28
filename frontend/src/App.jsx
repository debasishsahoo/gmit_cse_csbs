import PropsBasic from "./components/PropsBasic";
import ValueProps from "./components/ValueProps";
import PropsPass from "./components/PropsPass";
import PropsSpread from "./components/PropsSpread";
import "./App.css";
function App() {
  let anyValue = "JAVASCRIPT" + "2.0";
  const SpreadData = { stack1: "REACT", stack2: "ANGULAR" ,stack3:"NEXTJS",stack4:"TYPESCRIPT"};
  return (
    <>
      <PropsBasic name="Debasish" title="Sahoo" />
      <ValueProps
        strData="this is String Value"
        numData={123}
        boolData={false}
        objData={{ name: "Deb", title: "Sahoo" }}
        arrData={[1, 2, 3, 4, 5, 6, 7, 8]}
        jsxData={2 + 2 + 4 + 8 - 3}
        anyData={anyValue}
      />

      <PropsPass persons={["Archisman", "Sourav", "Jain", "treema"]} />
      <PropsSpread 
      a={SpreadData.stack1} 
      b={SpreadData.stack4}/>
      <br/>
      <PropsSpread {...SpreadData}/>
    </>
  );
}

export default App;
