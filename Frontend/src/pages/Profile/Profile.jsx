import { Avatar, Box, Button, Card, Tab, Tabs } from '@mui/material'
import React from 'react'
import PostCard from '../../components/Post/PostCard';
import UserReelCard from '../../components/Reels/UserReelCard';
import { useSelector } from 'react-redux';
import ProfileModal from './ProfileModal';
//import { useParams } from 'react-router-dom'

const tabs = [
  {value:"post", name:"Post"},
  {value:"reels", name:"Reels"},
  {value:"saved", name:"Saved"},
  {value:"repost", name:"Repost"}
]

const posts = [1,1,1,1,1,1];
const reels = [1,1,1,1,1,1];
const savedPost = [1,1,1,1,1,1];

const Profile = () => {


  const [open, setOpen] = React.useState(false);
  const handleOpenProfileModal = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  const {auth} = useSelector(store => store);

  const [value, setValue] = React.useState('post');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //const {id} = useParams();

  return (
    <Card className='my-10 w-[70%]'>

      <div className='rounded-md'>
        <div className='h-[15rem]'>
          <img
          className='w-full h-full object-cover rounded-t-md'
           src="https://cdn.pixabay.com/photo/2024/06/08/02/18/handsome-man-8815642_640.png" alt="" />

        </div>

        <div className='px-5 flex justify-between items-start mt-5 h-[5rem]'>

          <Avatar className='transform -translate-y-24'
          sx={{width:"10rem", height:"10rem"}}
          src='https://cdn.pixabay.com/photo/2021/04/05/12/39/man-6153298_640.jpg'/>

          {true? (<Button sx={{borderRadius:"20px"}} variant='outlined' onClick={handleOpenProfileModal}>Edit Profile</Button>) : (<Button sx={{borderRadius:"20px"}}variant='outlined'>Follow</Button>)}

        </div>

        <div className='p-5'>
          <div>
            <h1 className='py-1 font-bold text-xl'>{auth.user?.firstName +" "+ auth.user?.lastName}</h1>
            <p>@{auth.user?.firstName.toLowerCase() +"_"+ auth.user?.lastName.toLowerCase()}</p>       
          </div>

          <div className='flex gap-3 items-center py-3'>

            <span>41 post</span>
            <span>500 followers</span>
            <span>5 following</span>

          </div>

          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

        </div>

        <section>
          <Box sx={{ width: '100%', borderBottom:1, borderColor:"divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              
              
              {tabs.map((item) => <Tab value={item.value} label={item.name} wrapped />)}
            </Tabs>
          </Box>

          <div className='flex justify-center'>

            {value==="post" ? (<div className='space-y-5 w-[70%] my-10'>
              {posts.map((item) => <div className='border border-slate-100 rounded-md '>
                <PostCard/>
              </div>)}

            </div>) 
            
            : value=== "reels" ? (<div className='flex flex-wrap gap-2 justify-center my-10'>

              {reels.map((item) => <UserReelCard/>)}

            </div>) 
            
            : value==="saved" ? (
              <div className='space-y-5 w-[70%] my-10'>
              {savedPost.map((item) => <div className='border border-slate-100 rounded-md '>
                <PostCard/>
              </div>)}

            </div>)
            : (
              <div>Repost</div>
            )
            }

          </div>

        </section>

        <section>
          <ProfileModal open={open} handleClose={handleClose}/>
        </section>

      </div>
      
    </Card>
  )
}

export default Profile
