// import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Typography } from '@mui/material'
// import { red } from '@mui/material/colors'
// import React, { useState } from 'react'
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ShareIcon from '@mui/icons-material/Share';
// import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
// import { useDispatch, useSelector } from 'react-redux';
// import { createCommentAction, likePostAction } from '../../Redux/Post/post.action';
// import { isLikedByReqUser } from '../../utils/isLikedByReqUser';



// const PostCard = (item) => {

//   const [showComments, setShowComments] = useState(false);
//   const dispatch=useDispatch();
//   const {post, auth}=useSelector(store=>store);

//   const handleShowComment=()=>setShowComments(!showComments);

//   const handleCreateComment=(content)=>{
//     const reqData={
//        postId:item.id,
//        data:{
//         content
//        }
//     }
//     dispatch(createCommentAction(reqData));
// }



//   const handleLikePost=()=>{
//     dispatch(likePostAction(item.id));
//   };



//   return (
//     <Card className=''>

//         <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title={item.user.firstName+" "+item.user.lastName}
//         subheader={"@"+item.user.firstName.toLowerCase()+"_"+item.user.lastName.toLowerCase()}
//         />

//         <CardMedia
//             component="img"
//             height="194"
//             image={item.image}
//             alt="Paella dish"
//         />

//         <CardContent>
//             <Typography variant="body2" color="text.secondary">
//                 {item.caption}
//             </Typography>
//         </CardContent>

//         <CardActions className='flex justify-between' disableSpacing>
//             <div>
//                 <IconButton onClick={handleLikePost}>
//                     {isLikedByReqUser(auth.user.id, item)? <FavoriteIcon /> : <FavoriteBorderIcon />}

//                 </IconButton>

//                 <IconButton>
//                     {<ShareIcon />}
//                 </IconButton>

//                 <IconButton onClick={handleShowComment}>
//                     {<ChatBubbleIcon />}
//                 </IconButton>

//             </div>

//             <div>
//                 <IconButton>
//                 {true? <BookmarkIcon/> : <BookmarkBorderIcon/>}
//                 </IconButton>
                
//             </div>

//         </CardActions>

//         {showComments && <section>
//           <div className='flex items-center space-x-5 mx-3 my-5'>
//               <Avatar sx={{}}/>

//               <input onKeyPress={(e)=>{
//                 if(e.key=="Enter"){
//                   handleCreateComment(e.target.value)
//                   console.log("enter pressed ------", e.target.value);
//                 }
//               }} className='w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2' type="text" placeholder='write your comment....'/>
//           </div>

//           <Divider/>

//           <div className='mx-3 space-y-2 my-5 text-xs'>
            
//             {post.comments?.map((comment)=><div className='flex items-center space-x-5'>

//               <Avatar sx={{height:"2rem", width:"2rem", fontSize:"8rem"}}>
//                   {comment.user.firstName[0]}
//               </Avatar>

//               <p>{comment.content}</p>

//             </div>)}

           

//           </div>

//         </section>}
      
//     </Card>
//   )
// }

// export default PostCard






import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch, useSelector } from 'react-redux';
import { createCommentAction, likePostAction } from '../../Redux/Post/post.action';
import { isLikedByReqUser } from '../../utils/isLikedByReqUser';

const PostCard = ({ item }) => { // Use destructuring to directly get the 'item' prop

  const [showComments, setShowComments] = useState(false);
  const dispatch = useDispatch();
  const { auth } = useSelector(store => store); // Destructure only necessary data

  const handleShowComment = () => setShowComments(!showComments);

  const handleCreateComment = (content) => {
    if (content.trim() === "") return; // Prevent empty comments

    const reqData = {
      postId: item.id,
      data: {
        content
      }
    };
    dispatch(createCommentAction(reqData));
  };

  const handleLikePost = () => {
    dispatch(likePostAction(item.id));
  };

  // Check for necessary nested properties to avoid errors
  const userFirstName = item?.user?.firstName || '';
  const userLastName = item?.user?.lastName || '';
  const userInitial = userFirstName.charAt(0) || 'U'; // Fallback to 'U' if no initial available

  if (!item) {
    return null; // or return a loading indicator or placeholder component
  }

  return (
    <Card className=''>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {userInitial}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${userFirstName} ${userLastName}`}
        subheader={`@${userFirstName.toLowerCase()}_${userLastName.toLowerCase()}`}
      />

      {item?.image && (<CardMedia
        component="img"
        height="194"
        image={item.image || 'defaultImage.jpg'} // Provide a default image if none available
        alt={item.caption || 'Post image'}
      />)}

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item?.caption || 'No caption provided.'}
        </Typography>
      </CardContent>

      <CardActions className='flex justify-between' disableSpacing>
        <div>
          <IconButton onClick={handleLikePost}>
            {isLikedByReqUser(auth.user.id, item) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>

          <IconButton>
            <ShareIcon />
          </IconButton>

          <IconButton onClick={handleShowComment}>
            <ChatBubbleIcon />
          </IconButton>
        </div>

        <div>
          <IconButton>
            {true ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </div>
      </CardActions>

      {showComments && (
        <section>
          <div className='flex items-center space-x-5 mx-3 my-5'>
            <Avatar sx={{}} />

            <input
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleCreateComment(e.target.value);
                  e.target.value = ""; // Clear input after submitting
                }
              }}
              className='w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2'
              type="text"
              placeholder='Write your comment...'
            />
          </div>

          <Divider />

          <div className='mx-3 space-y-2 my-5 text-xs'>
            {item.comments?.length ? item.comments.map((comment, index) => (
              <div key={index} className='flex items-center space-x-5'>
                <Avatar sx={{ height: "2rem", width: "2rem", fontSize: "8rem" }}>
                  {comment.user.firstName.charAt(0) || 'U'} {/* Fallback to 'U' */}
                </Avatar>
                <p>{comment.content}</p>
              </div>
            )) : <p>No comments yet.</p>} {/* Handle case when there are no comments */}
          </div>
        </section>
      )}
    </Card>
  );
};

export default PostCard;
