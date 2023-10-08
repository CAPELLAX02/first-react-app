import PropTypes from "prop-types";

function Card({ children, reverse }) {
  // CONDITIONAL CLASS:

  // return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  return (
    <div
      className="card"
      // CONDITIONAL STYLING:
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  // Kartların açık/koyu tema olmasına true/false diyerek buradan değiştirebiliriz:
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
