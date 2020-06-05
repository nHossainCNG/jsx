import React from 'react'
import ReactDOM from 'react-dom'




const App = function (){
        return (
        <div className="ui container comments">
            <div className="comment">
                <a className="avatar" href= "/">
                    <img alt="avatar" />
                </a>
                <div className="content">
                    <a href="/" className="author">Sam</a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text"> Wow! Nice Post!</div>
                </div>
            </div>
        </div>
        );
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)