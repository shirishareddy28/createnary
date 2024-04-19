import { useMemo } from "react";
import "./Property1Default1.css";

const Property1Default1 = ({
  property1DefaultIconOverflow,
  property1DefaultIconPosition,
  property1DefaultIconTop,
  property1DefaultIconLeft,
}) => {
  const property1DefaultIconStyle = useMemo(() => {
    return {
      overflow: property1DefaultIconOverflow,
      position: property1DefaultIconPosition,
      top: property1DefaultIconTop,
      left: property1DefaultIconLeft,
    };
  }, [
    property1DefaultIconOverflow,
    property1DefaultIconPosition,
    property1DefaultIconTop,
    property1DefaultIconLeft,
  ]);

  return (
    <img
      className="property-1default-icon"
      alt=""
      src="/navlinks.svg"
      style={property1DefaultIconStyle}
    />
  );
};

export default Property1Default1;
