import Card from "./components/cards";
import listAnnouncements from "./mocks/auto-vehicles";

function App() {
  return (
    <div>
      {listAnnouncements.map((announcement, index) => {
        return <Card key={index} announcement={announcement} index={index} />;
      })}
    </div>
  );
}

export default App;
