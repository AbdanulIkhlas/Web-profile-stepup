import PropTypes from "prop-types";

const PartnerCard = ({ image }) => {
  return (
    <div className="mb-10 flex items-center justify-center">
      <img src={image} alt="image" className="w-40" />
    </div>
  );
};

// proptypes image
PartnerCard.propTypes = {
  image: PropTypes.string,
};

export default PartnerCard;
