import React from "react";

const Mission = (props) => {
  return (
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row gy-5">
            <h1 className="homesechead" ><strong>{props.name}</strong> <hr /></h1>
            
            <p>Fueling growth and igniting online presence for small and mid-scale industries through
                personalized digital marketing strategies.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Mission;