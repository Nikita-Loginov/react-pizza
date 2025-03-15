import React from "react";
import ContentLoader from "react-content-loader";

export default function Skeleton() {
  return (
    <ContentLoader
      speed={2}
      width={"100%"}
      height={"360"}
    //   viewBox="0 0 280 480"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="50%" cy="109" r="109" />
      <rect x="0" y="231" rx="0" ry="0" width="100%" height="24" />
      <rect x="0" y="266" rx="0" ry="0" width="100%" height="90" />
    </ContentLoader>
  );
}
