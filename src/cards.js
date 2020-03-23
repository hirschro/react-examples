import React from 'react';

//child component
const Card = (props) => {
  return (
      <div className="card">
        <img className="card-img-top"
          src={props.featureImage}
          alt="#" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">Learn more</a>

      </div>
    </div>
  )
}

//parent component
export const CardList = () => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <Card featureImage="https://source.unsplash.com/random/600x249/?technology" alt=""
          title="How To Make Interactive ReactJS Form"
          description="Let's write some interactive form with React"
          link="https://sebhastian.com/interactive-react-form"

          />
      </div>
      <div className="col-sm-4">
        <Card featureImage="https://source.unsplash.com/random/600x250/?technology" alt="" 
          title="Practicing with React Components"
          description="Let's have fun creating with React JS"
          link="https://google.com"
        />
      </div>
      <div className="col-sm-4">
        <Card featureImage="https://source.unsplash.com/random/600x251/?technology" alt=""
          title="Even More Practice with React JS(functional and stateless components)"
          description="Let's have even MORE fun with React JS!"
          link="https://react.com"
        />
      </div>
    </div>
  );
}
