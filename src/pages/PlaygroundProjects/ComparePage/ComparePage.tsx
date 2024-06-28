import CompareComponent from "../../../components/CompareList/CompareList";
import "./ComparePage.scss";

const ComparePage = () => {
  return (
    <section className="comparePage">
      <div className="comparePage__container">
        <h1 className="comparePage__title">Compare Page</h1>
        <CompareComponent />
      </div>
    </section>
  );
};

export default ComparePage;
