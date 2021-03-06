import { connect } from 'react-redux';
import { get } from 'lodash';
import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { fetchSubreddit } from '../../redux/actions/reddit';
import RedditPost from './RedditPost';
import '../../styles/RedditWidget.css';
import Theme from '../../constants/theme';

const DEFAULT_SUBREDDIT = 'bitcoin';

const PostsContainer = styled.div`
  background-color: ${props => props.theme.subBackground}
`;


class RedditWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: DEFAULT_SUBREDDIT,
    };
  }

  componentDidMount() {
    const { loadPosts } = this.props;
    const { search } = this.state;

    loadPosts(search);
  }

  handleSubredditChange = e => {
    this.setState({
      search: e.target.value,
    });
  }

  handleSearchSubmit = () => {
    const { loadPosts } = this.props;
    const { search } = this.state;

    loadPosts(search);
  }

  renderPosts() {
    const { posts } = this.props;
          console.log('post', posts)

    console.log('posts', posts);
    return posts.map(post => {
      return (
        <RedditPost key={post.id} post={post} />
      );
    });
  }

  render() {
    const { selectedSubreddit } = this.props;
    const { search } = this.state;

    return (

      <ThemeProvider theme={Theme.light}>
          <PostsContainer
            className='PostsContainer'
          >
            {this.renderPosts()}
          </PostsContainer>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedSubreddit: get(state, 'reddit.selectedSubreddit'),
    posts: get(state, 'reddit.posts'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadPosts(subreddit) {
      return dispatch(fetchSubreddit(subreddit));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RedditWidget);