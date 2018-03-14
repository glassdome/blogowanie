import React from 'react';
import moment from 'moment';

class CommentForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      author:  props.comment ? props.comment.author: '',
      body: props.comment ? props.comment.body : '',
      timestamp: props.comment ? moment(props.comment.timestamp) 
                               : moment(),
      category: props.comment ? props.comment.category: props.category,
      voteScore: props.comment ? props.comment.voteScore: 1,
      parentId: props.comment ? props.comment.parentId : props.parentId,
      error: '',
    }
  }

  onNameChange = (e) => {
    const author = e.target.value;
    this.setState(() => ({author}))

  } 
  onBodyChange = (e) => {
    const body = e.target.value;
    this.setState(() => ({body}))
  }
  onCategoryChange = (e) => {
    const category = e.target.value;
    this.setState(() => ({category}))
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.author || !this.state.body) {
      this.setState(() => ({ 
          error: 'Please provide your name and comment.'
      }))
    }else{
      this.setState(() => ({error: ''}));
      this.props.onSubmit({
          timestamp: this.state.timestamp.valueOf(),
          body: this.state.body,
          author: this.state.author, 
          category:this.state.category,
          voteScore: this.state.voteScore,
          parentId: this.state.parentId,
          deleted: false,
          parentDeleted: false,
      });
    }
  }

  render(){
    return(
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input 
              type='text' 
              placeholder='Your name' 
              value={this.state.author}
              onChange={this.onNameChange}
          />
          <textarea
            placeholder='Your comment'
            value={this.state.body}
            onChange={this.onBodyChange}
          />
          <button>Add Comment</button>
        </form>
      </div> 
    );
  }
}

export default CommentForm;