import React, {useState} from 'react';
import Counter from './components/counter';
import Input from './components/input';
import PostList from './components/postList';
import './style/app.css';
function App(){
const [post, valuePosts]= useState(
  
    [
    
    {id:1, title:'Javascript', body:'lorem lorem lorem'},
    {id:2, title:'css', body:'lorem lorem lorem'},
    {id:3, title:'php', body:'lorem lorem lorem'},
    {id:4, title:'react', body:'lorem lorem lorem'}
    ]
  
)
  return(
    <>
      

      <Counter/>
      <Input/>
      <PostList post={post} title={'List 1'}/>
      <PostList post={post} title={'List 2'}/>
     
     
  
    </>
)

}
export default App;