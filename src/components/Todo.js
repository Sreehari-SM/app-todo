import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Delete from '../../src/assets/delete.svg'
import Tick from '../assets/tick-green.svg';
import Revert from '../assets/revert.svg';




export default function Todo() {
     const [items, setitems] = useState([{Name: "cloth washing",id : 1},
     {Name: "1m walk",id : 2},{Name: "swimming",id : 3},
     {Name: "playing cricket",id : 4}]);
      const [input, setinput] = useState("");
      const [completed, setcompleted] = useState([{Name: "cloth washing",id : 1},
      {Name: "1m walk",id : 2},{Name: "swimming",id : 3},
      {Name: "playing cricket",id : 4}]);
      let removeItem= (id)=>{
         let new_item = items.filter((item)=> item.id !==id);
        setitems(new_item)
        // console.log(new_item);
        

    }
    

      let updateItems = ()=>{
         let new_item ={
             Name : input,
             id: items.length
         }
            if(input){
                setitems([...items, new_item]);
                setinput("");
            }
     
            
          
      }
    //   let completed =()=>{

    //   }
     
    return (
        <>
          <Main>
              <Heading>TO DO LIST</Heading>
              <h2>Things to be done</h2>
              <List>
                 {items.map((item) => (<Section><Done key={item.id}><Round></Round>{item.id+1}, {item.Name}</Done>
                 <a onClick={()=>removeItem(item.id)}><Img src={Delete} alt="image" /></a></Section> ))}
                

              </List>
              <Input placeholder="Type new task..." value={input} onChange={(e) =>setinput(e.target.value)}  />
              <Button onClick={updateItems}>Add New</Button>
              <h2>Completed</h2>
              <List>
                  
                      <Leftsection>{completed.map((complete) => (<Done key={complete.id}><Img src={Tick} alt="tickimage" />
                      {complete.id+1}, {complete.Name}</Done>))}
                      </Leftsection>
                      <Rightsection><Img src={Delete} /><Img src={Revert} /></Rightsection>

                  

            </List>
            

            </Main>  
            

        </>
        
    )
   
   
    
}

const Main = styled.div`
    width : 600px;
    margin : 0 auto;
    height : 100vh;
    border : 1px solid black;
    padding: 50px 70px;
    `;
const Heading = styled.h1`
    text-align:center;
`;
const List = styled.ul`

list-style:none;
`;
const Round = styled.div`
height:20px;
width:20px;
margin-right:10px;
border-radius:50px;
display:inline-block;
cursor:pointer;


border:2px solid black;

`;
const Done = styled.li`
display:flex;
align-items:center;
font-size:24px;
font_weight:500;
`;
const Section = styled.section`
display:flex;
justify-content:space-between;
align-items:center;
`;
const Button = styled.button`

background-color:blue;
border-radius:6px;
border-top-left-radius:0px;
border-bottom-left-radius:0px;
`;
const Input = styled.input`
width: 60%;
position:relative;
padding:0px 10px;
&::before{
    content:"";
    position:absolute;
    background-image: url(${require("../../src/assets/plus.svg").default}) ;
    width:16px;
    height:16px;
    z-index:2;
}

`;
const Img = styled.img`
cursor: pointer;
margin-right:10px;

`;
const Leftsection = styled.div`

`;
const Rightsection = styled.div`

`;
    

