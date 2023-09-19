import { Agent, AgentsMap } from "../../components";
import "./agentsPage.scss";

const agents = [
  {
    id: 1,
    name: "محمد علي",
    location: "القاهرة",
    phone: "+20 10 1234 5678",
  },
  {
    id: 2,
    name: "صابر أحمد",
    location: "الإسكندرية",
    phone: "+20 11 2345 6789",
  },
  {
    id: 3,
    name: "عبد الرحمن مصطفى",
    location: "الجيزة",
    phone: "+20 12 3456 7890",
  },
];

const AgentsPage = () => {
  return (
    <section className="text-center  ">
      <div className="section-center agents-map">
        <AgentsMap />
      </div>
      <div>
        <h3 className="title my-5">عملاؤنا</h3>
        <div className="agents">
          <div className="section-center">
            <div className="agents-center py-5">
              {agents.map((agent) => {
                return <Agent key={agent.id} {...agent} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsPage;
