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
      const [completed, setcompleted] = useState([{Name: "cloth purchase",id : 5},
      {Name: "1km run",id : 6},{Name: "swimming training",id : 7},
      {Name: "playing football",id : 8}]);
      const [Itemcount, setItemcount] = useState(0);
      useEffect(()=>{
          setItemcount(completed.length+items.length);
      })
      const deleteitem = (id)=>{
        let new_item = items.filter((item)=>item.id !== id);
        setitems(new_item);
    
    };
    const deletecompleted = (id)=>{
        let new_item = completed.filter((item)=>item.id !== id);
        setcompleted(new_item);
    };
    const completedItems = (id)=>{
        let current_item = items.find((item)=>item.id == id);
        setcompleted([...completed,current_item]);
        let new_item = items.filter((item)=> item.id !== id);
        setitems(new_item);
    };
    const revertItems = (id)=>{
        let current_item = completed.find((item)=>item.id == id);
        setitems([...items,current_item]);
        let new_item = items.filter((item)=> item.id !== id);
        setcompleted(new_item);
    }

      let renderItems =()=>{
          return items.map((item)=>(
            <ListItem>
            <LeftContainer onClick={()=>completedItems(item.id)}>
                <CheckContainer></CheckContainer>
                <ItemContent>{item.id}, {item.Name}</ItemContent>
            </LeftContainer>
            <RightContainer>
                <ActionButton onClick={()=>deleteitem(item.id)}>
                    <ButtonImage src={Delete} alt="img" />
                </ActionButton>
            </RightContainer>
        </ListItem>

          ))
      };
      let renderCompleted= ()=>{
          
            return  completed.map((item)=>(
                <ListItem  key={item.id}>
                <LeftContainer>
                    <CheckContainerCompleted>
                        <TickImage src={Tick} alt="img" />
                    </CheckContainerCompleted>
                    <ItemContentCompleted>{item.id},{item.Name}</ItemContentCompleted>
                </LeftContainer>
                <RightContainer>
                    <ActionButton onClick={()=> revertItems(item.id)}>
                        <ButtonImage src={Revert} alt="img"/>
                    </ActionButton>
                    <ActionButton  onClick={()=>deletecompleted(item.id)}>
                        <ButtonImage src={Delete} alt="img" />
                    </ActionButton>
                </RightContainer>
            </ListItem>
                ))
          
      };
      let Addinput = (event)=>{
          event.preventDefault();
          let newInput={
              id:Itemcount + 1,
              Name: input,
          }
          setitems([...items, newInput]);
          setinput("");
          setItemcount((prev)=>prev+ 1);
          

      }
      
      
    
    return (
        <>
        <Container>
            <Heading>ToDo List</Heading>
            <TodoContainer>
                <SubHeading>Things to be done</SubHeading>
                <TodoList>
                    {renderItems()}
                </TodoList>
            </TodoContainer>
            <NewtodoForm>
                <FormInput placeholder="Type new task..." value={input} onChange={(e)=> setinput(e.target.value)} />
                <FormSubmitButton onClick={(event)=>Addinput(event)}>Add New</FormSubmitButton>

            </NewtodoForm>
            <TodoContainer>
            <SubHeading>Things to be done</SubHeading>
            <TodoList>
            
                    {renderCompleted()}
            </TodoList>
            </TodoContainer>

        </Container>  
        </>
    )
}
const Container = styled.div`
    width:90% auto;
    max-width: 1000px;
    padding: 50px 10%;
    border-left: 2px solid #f5f5f5;
    border-right: 2px solid #f5f5f5;
    margin: 0 auto;
    height: 100vh;
`;
const Heading = styled.h1`
    font-size : 52px;
    font-weight:bold;
    margin-bottom: 40px;
`;
const TodoContainer = styled.div``;
const SubHeading = styled.h3`
    font-size:32px;
    color: #050241;
`;
const TodoList = styled.ul``;
const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items : center;
    margin-bottom: 20px;
`;
const LeftContainer = styled.div`
    display:flex;
    align-items: center;
`;
const CheckContainer = styled.span`
    width:32px;
    height:32px;
    border-radius:50%;
    border: 2px solid #050241;
    display:inline-block;
    margin-right:15px;
    cursor: pointer;
`;
const ItemContent = styled.span`
    font-size: 28px;
    cursor: pointer;
`;
const RightContainer = styled.div``;
const ActionButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    marin-right: 20px;
    outline: none;
    &:last-child{
        margin-right:0px;
    }
`;
const ButtonImage = styled.img``;
const NewtodoForm = styled.form`
    display: flex;
    margin-left: 40px;
    margin-top: 30px;
    position: relative;
    &::before{
        content: "";
        background-image: url(${require("../assets/plus.svg").default});
        width: 16px;
        height: 16px;
        display: block;
        position: absolute;
        left:10px;
        bottom:0;
        top: 0;
        margin: auto 0;
        z-index: 2;
    }
`;
const FormInput = styled.input`
    display : block;
    outline: none;
    width: 100%;
    border: 1px solid #c6c6c6;
    border-right: none;
    padding: 0 10px 0 35px;
    font-size: 22px;
`;
const FormSubmitButton = styled.button`
    padding: 15px 25px;
    white-space: nowrap;
    border: none;
    background:#020541;
    color: white;
    cursor: pointer;
`;
const CheckContainerCompleted = styled(CheckContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-color:06c692;
`;
const ItemContentCompleted = styled(ItemContent)`
    color: 06c692;
`;
const TickImage = styled.img``;
