// 10. Rating Component
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function Rating({ value, text }) {
  return (
    <div className="rating">
      <RatingStar value={value} valueFullStar={1} valueHalfStar={0.5} />
      <RatingStar value={value} valueFullStar={2} valueHalfStar={1.5} />
      <RatingStar value={value} valueFullStar={3} valueHalfStar={2.5} />
      <RatingStar value={value} valueFullStar={4} valueHalfStar={3.5} />
      <RatingStar value={value} valueFullStar={5} valueHalfStar={4.5} />

      <span className="rating-text">{text && text}</span>
    </div>
  );
}

function RatingStar({ value, valueFullStar, valueHalfStar }) {
  return (
    <span>
      {value >= valueFullStar ? (
        <FaStar />
      ) : value >= valueHalfStar ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar />
      )}
    </span>
  );
}
