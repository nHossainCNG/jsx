import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'



const App = function (){
        return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                author="Sam" 
                timeAgo="Today at 5:00PM" 
                content="This is my comment"
                avatar = {faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author="Laura"  
                timeAgo="Today at 6:00PM"
                content="This is my comment"
                avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                author="Max"  
                timeAgo="Today at 4:00PM"
                content="This is my comment"
                avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
 
        </div>
        );
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)