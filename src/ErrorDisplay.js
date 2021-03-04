import React from "react";

const ErrorDisplay = (props) => {
    
  return (
    <div>
      <div className="ui active dimmer">
        <div className="ui indeterminate text  loader">
            {props.err}
            </div>
      </div>
    </div>
  );
};

export default ErrorDisplay; 