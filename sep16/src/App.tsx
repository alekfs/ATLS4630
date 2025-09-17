import Button from "./button";
import MyList from "./MyList";
import CountButton from "./countButton";



function App() {
  return (
    <div>
      <h1>Welcome to React Fundamentals</h1>
      <Button isSpecial={true} text="Button 1"/>
      <Button isSpecial={false} text="Button 2"/>
      <CountButton isSpecial={false}/>
      <MyList />
    </div>
  )
}
export default App
