import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import Loading from "../Loading";
import { connect } from "react-redux";
import { GET_FOLLOWING, GET_POSTS } from "../actions/actionTypes";

const PostList = (props) => {
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { getPosts, getFollowing, user } = props;
    console.log(user);
    props.getPosts();
    // getFollowing(user.userId).then((res) => {
    //   const following = res.payload && res.payload.user ? res.payload.use.following : [];
    //   setFollowing(following);
    //   setLoading(false);
    // });
  });

  // If on user X's profile page, only show posts made by user X
  // Otherwise, show posts made by user X and their followers
  const checkPageType = (followingList, onProfilePage, postAuthorId, signedInUserId) => {
    if (onProfilePage) {
      const { match } = this.props;
      const userProfileId = match.params.id;
      return postAuthorId === userProfileId;
    }
    return followingList.includes(postAuthorId) || postAuthorId === signedInUserId;
  };

  const {
    addComment,
    deleteComment,
    deletePost,
    editComment,
    editPost,
    getUser,
    posts,
    updatePostLikes,
    onProfilePage,
    user,
  } = props;

  return loading ? (
    <Loading />
  ) : (
    <div>
      {posts.map((post) =>
        checkPageType(following, onProfilePage, post.authorId, user.userId) ? (
          <Post
            key={post._id}
            _id={post._id}
            author={post.author}
            authorId={post.authorId}
            avatarColor={post.avatarColor}
            comments={post.comments}
            likers={post.likers}
            likesCount={post.likesCount}
            signedInUserId={user.userId}
            text={post.text}
            timestamp={post.timestamp}
            addComment={(action, commenterId, postId, text, timestamp) =>
              addComment(action, commenterId, postId, text, timestamp)
            }
            deleteComment={(action, commentId, postId) => deleteComment(action, commentId, postId)}
            deletePost={(id) => deletePost(id)}
            editComment={(action, commentId, postId, text) => editComment(action, commentId, postId, text)}
            editPost={(id, text, author) => editPost(id, text, author)}
            getUser={(id) => getUser(id)}
            updatePostLikes={(action, postId, likerId) => updatePostLikes(action, postId, likerId)}
          />
        ) : null,
      )}
    </div>
  );
};

PostList.defaultProps = {
  posts: [
    {
      comments: [],
    },
  ],
  match: {
    params: {
      id: "",
    },
  },
  onProfilePage: false,
};

PostList.propTypes = {
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  onProfilePage: PropTypes.bool,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      authorId: PropTypes.string.isRequired,
      comments: PropTypes.array,
      likers: PropTypes.array.isRequired,
      likesCount: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired,
    }),
  ),
  updatePostLikes: PropTypes.func.isRequired,
  getFollowing: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  user: PropTypes.shape({
    userId: PropTypes.string.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch({ type: GET_POSTS }),
    getFollowing: () => dispatch({ type: GET_FOLLOWING }),
  };
};

export default connect(null, mapDispatchToProps)(PostList);
