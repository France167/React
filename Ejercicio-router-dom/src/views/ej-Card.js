
import Card1 from "../components/Card1/Card1";

const card = {
  url: "https://a.cdn-hotels.com/gdcs/production101/d154/ee893f00-c31d-11e8-9739-0242ac110006.jpg?impolicy=fcrop&w=800&h=533&q=medium",
  title: "Visit New York",
  paragraph: "Go buy your tickets and enjoy your holidays",
  link: "https://www.iberia.com/?language=en&END_CITY_01=NYC&ADT=1&TRIP_TYPE=2&FARE_TYPE=R&flexible=true&n_okw=new%20york%20ticket_e__c_40551706760_256688517242_kwd-130047505_7478321532_g_1005419&gclid=Cj0KCQiAmpyRBhC-ARIsABs2EAqLdYBbO-nh1fBCV1BRkMPUqV8SUGK31YVSZDcMI_CQ9KFlM0kNsrEaArNAEALw_wcB",
  buttonText: "Check out",
};

function Card() {
  return (
    <div className="App">
      <Card1
        url={card.url}
        title={card.title}
        paragraph={card.paragraph}
        link={card.link}
        buttonText={card.buttonText}
      />
    </div>
  );
}

export default Card;
