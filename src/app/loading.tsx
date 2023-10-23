import "./style.module.css";

const Loading = () => {
  return (
    <div>
      <span
        className="loader"
        style={{ textAlign: "center", fontSize: "40px", height: "50px" }}
      >
        ...Loading
      </span>
    </div>
  );
};

export default Loading;
