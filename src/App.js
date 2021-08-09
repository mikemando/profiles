import React from "react";
import faker from "faker";
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    <br />
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    text="Nice blog post!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:00AM"
                    text="It was an amazing read."
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 5:00PM"
                    text="Good job man. Thrilled for your next post."
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

export default App;
