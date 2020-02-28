import React, {Component} from 'react';
import '../App.css';
import Card from '@material-ui/core/Card';
import { useParams } from 'react-router-dom';


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


  render() {
    console.log(this.state.topicsList)
    console.log(this.state.questions)
    return (
      <nav>
        <ul className="side-nav-links">
          <li>
            <span className="side-nav-header">Featured Topics</span>
          </li>
          {this.state.topicsList.map(title => 
          <li key={title} className="side-nav-title">{title}</li>)}
        </ul>
      </nav>
    );
  }
}

export default Qna;
