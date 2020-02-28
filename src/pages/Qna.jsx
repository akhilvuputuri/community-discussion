import React, {Component} from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Qna extends Component {

  constructor() {
    super();
    this.state = {
      topicsList: [],
      questions: [],
    };
  }
  
  componentDidMount() {
    const axios = require('axios');
    const topic = this.props.match.params.topic || "all";

    axios.get('http://localhost:5000/topicsList')
      .then((response) => {
        this.setState({
          topicsList: response.data
        })
      });
    axios.get('http://localhost:5000/questions/' + topic)
    .then((response) => {
      this.setState({
        questions: response.data
      })
    })
  }

  renderTopics(topics) {
    return (
    <ul className="question-topics">
      {topics.map(topic => 
        <li key={topic} className="question-topic">
          <a href={`/questions/${topic}`}>
            {topic}
          </a>
        </li>)}
    </ul>)
  }


  render() {
    return (
      <div className="qna-root">
        <nav className="side-nav-bar">
          <ul className="side-nav-links">
            <li className="side-nav-title-all">
              <a href={`/questions/all`}>
                All Questions
              </a>
            </li>
          </ul>
          <ul className="side-nav-links">
            <li>
              <span className="side-nav-header">Featured Topics</span>
            </li>
            {this.state.topicsList.map(title => 
            <li key={title} className="side-nav-title">
              <a href={`/questions/${title}`}>
                {title}
              </a>
            </li>)}
          </ul>
        </nav>
        <ul className="questions-main">
          {this.state.questions.map(question => 
          <li key={question.title} className="question-card">
            <div className="question-topics question-part">
              {this.renderTopics(question.topics)}
            </div>
            <div className="question-title question-part">
              {question.title}
            </div>
            <div className="question-author question-part">
              {question.author}
            </div>
            <div className="question-answer question-part">
              {question.answer}
            </div>
          </li>)}
        </ul>
      </div>
    );
  }
}

export default Qna;
