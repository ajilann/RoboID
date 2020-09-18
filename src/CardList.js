import React from 'react';
import Card from './Card';

/*
const CardList = ({Robots}) => {
    return (
        <div>
     <Card id={Robots[0].id}name={Robots[0].name} username={Robots[0].username} email={Robots[0].email} />
   <Card id={Robots[1].id}name={Robots[1].name} username={Robots[1].username} email={Robots[1].email} />
   <Card id={Robots[2].id}name={Robots[2].name} username={Robots[2].username} email={Robots[2].email} />
    </div>); 
} */
   
const CardList = ({Robots}) => {
    return (  
    
    <div>
        {
        Robots.map((user, i) =>
            {
            return (
            <Card key= {1} 
            id={Robots[i].id}
            name={Robots[i].name}
            username={Robots[i].username}
            email={Robots[i].email} />
    );

    })
}
    </div> );
    }
export default CardList;






