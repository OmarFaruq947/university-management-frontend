"use client";
import { Bars } from "react-loader-spinner";

const LoadingPage = () => {
  return (
    <div className="loading">
      <Bars
        height="80"
        width="80"
        color="#001529"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoadingPage;
