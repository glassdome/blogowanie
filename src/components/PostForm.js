import React from 'react';
import moment from 'moment';


class PostForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: props.post ? props.post.title : '',
      body: props.post ? props.post.body : '',
      author: props.post ? props.post.author: '',
      timestamp: props.post ? props.post.timestamp: moment(),
      category: props.post ? props.post.category: 'udemey',
      voteScore: props.post ? props.post.voteScore: 1,
      error: '',
    };
  }

 
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({title}));
  };
  onBodyChange = (e) => {
    const body = e.target.value;
    this.setState(() => ({body}));
  };
  onNameChange = (e) => {
    const author = e.target.value;
    this.setState(() => ({author}))
  }
  onCategoryChange = (e) => {
    const category = e.target.value;
    this.setState(() => ({category}))
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.title || !this.state.body || !this.state.author){
      //display error message
      this.setState(() => ({error: 'Please provide your name, a title and descripton for your post.'}));
    }else{
      //clear the error
      console.log('submitted');
      this.setState(() => ({error: ''}));

      this.props.onSubmit({
          timestamp: this.state.timestamp.valueOf(), //changees formatted timestamp back to milliseconds
          title: this.state.title,
          body: this.state.body,
          author: this.state.author, 
          category:this.state.category,
          voteScore: this.state.voteScore,
          deleted: false,
      })
    }
  }
      
  render() {
    return  (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input 
            type='text'
            placeholder='Your name'
            autoFocus
            value={this.state.author}
            onChange={this.onNameChange}
          />
          <input 
            type='text'
            placeholder='Post title'
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <textarea 
            placeholder='Please add text for your post'
            value={this.state.body}
            onChange={this.onBodyChange}
          />
          <select 
            name="category"
            value={this.state.category}
            onChange={this.onCategoryChange}
          >
              <option value='udacity'>Udacity</option>
              <option value='react'>React</option>
              <option value='redux'>Redux</option>
          </select>

          <button>Add Post</button>
        </form>
      </div>
    )
  }
}



export default PostForm;