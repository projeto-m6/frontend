import Card from "../../components/cards";
import listAnnouncements from "../../mocks/auto-vehicles";

const Dashboard = () => {
  return (
    <>
      {listAnnouncements.map((announcement, index) => {
        return <Card key={index} announcement={announcement} />;
      })}
    </>
  );
};

export default Dashboard;
