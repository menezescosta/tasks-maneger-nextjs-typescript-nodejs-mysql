import * as C from './style';
import Image from 'next/image';
import { FaIgloo,FaCartPlus, FaLeaf,FaUsers,FaUserGraduate,FaClipboardList,FaClipboardCheck,FaPercentage } from 'react-icons/fa';
import Link from 'next/link';

const Aside=()=>{
    return(
        <C.Container>
            <div className='logoP'>
                <h2><FaLeaf/></h2>
                <h3>Encode</h3> 
                    
            </div>
            <div className='menu'>
                <div className='menu-item'>
                    <FaIgloo/>
                    Dashboard
                </div>
                <div className='menu-item'>
                    <FaUsers />
                    <Link href='/usersList'>All Users</Link>
                </div>
                <div className='menu-item'>
                    <FaUserGraduate />
                    <Link href='/admin'>Admin</Link>
                </div>
                <div className='menu-item'>
                    <FaClipboardList />
                    <Link href='/index'>All tasks</Link>
                </div>
                <div className='menu-item'>
                    <FaClipboardCheck/>
                    Finished Tasks
                </div>
                <div className='menu-item'>
                    <FaPercentage/>
                    Percentage Of Tasks
                </div>
                <div className='menu-item'>
                    <FaCartPlus />
                    <Link href="/addUsers">Add Users</Link>
                </div>
            </div>
        </C.Container>
    );
}
export default Aside;