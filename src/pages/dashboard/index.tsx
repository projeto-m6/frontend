import Card from "../../components/cards";
import Footer from "../../components/footer";
import listAnnouncements from "../../mocks/auto-vehicles";

const Dashboard = () => {
  return (
    <>
      {listAnnouncements.map((announcement, index) => {
        return <Card key={index} announcement={announcement} />;
      })}
      <Footer />
    </>
  );
};

export default Dashboard;
