// import react, reactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
// npm install -save faker
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
           <h4>Warning!</h4>
          Are you sure you want to do this?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45p"
          commentText="Nice Blog Post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:45p"
          commentText="I like it"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 4:45p"
          commentText="Awww!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

// render component
ReactDOM.render(<App />, document.querySelector("#root"));
