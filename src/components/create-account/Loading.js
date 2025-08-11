import React from "react";

const Loading = () => {
   return (
      <div className="loading-overlay">
         <div className="loader-wrapper">
            <div className="loader-ball ball1"></div>
            <div className="loader-ball ball2"></div>
         </div>
      </div>
   );
};

export default Loading;
