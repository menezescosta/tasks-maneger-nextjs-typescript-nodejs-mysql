import * as C from './style';
import { api } from '../../services/api';
import { useState, useEffect } from 'react';

interface userProps {
    name: string;
    email: string;
    password: string;
    id:number;
}

interface PickUserProps{
    setShowPickUser(showPickUser:boolean):void;
    handleValues():void;
    name: string;
    description:string;
    status:string;
}

const PickUser=({name,description,status,setShowPickUser,handleValues}:PickUserProps)=>{

    const [users,setUsers]=useState<userProps[]>([]);


    useEffect(() => {
        api.get('/users').
            then((data) => setUsers(data.data));
    }, []);

    const handle=(idUser:number)=>{
        api.post('/Tasks', {
            name,
            description,
            status,
            idUser
        });
            setShowPickUser(false);
            handleValues();
        }

    return(
        <C.Container>
            <C.UsersContainer>
                {
                    users.map((user,key)=>(
                        <div key={key} onClick={()=>handle(user.id)}>
                            <div className='initial'>
                                {user.name.charAt(0)}
                            </div>
                            <div className='userInfo'>
                                <h3>
                                    {user.name}
                                </h3>
                                <span>{user.email}</span>
                            </div>
                        </div>
                    ))
                }
            </C.UsersContainer>
        </C.Container>
    )
}
export default PickUser;