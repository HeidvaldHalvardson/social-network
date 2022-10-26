import {addPost} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToPropsFactory = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToPropsFactory = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPost(newPostText))
    }
  }
}

const MyPostsContainer = connect(mapStateToPropsFactory, mapDispatchToPropsFactory)(MyPosts)

export default MyPostsContainer;