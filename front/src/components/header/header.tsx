import * as C from './style';
import {FaSearch,FaBars} from 'react-icons/fa';

const Header=()=>{
    return(
        <C.Container className='header'>
            <div className='logo'><FaBars />Dashboard</div>
            <div className='searchContainer'><FaSearch /><input type="search" placeholder='search here' name="" id="" /></div>
            <div className='avatar'>
                <div className='image'>

                </div>
                <div className='desc'>
                    <span>Jonh Doe</span>
                    <small>Supper admin</small>
                </div>
            </div>
        </C.Container>
    );
}
export default Header;