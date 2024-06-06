import { useContext } from 'react';
import { ShopContext } from './Head.jsx';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const {count, setCount } = useContext(ShopContext);
    return (
        <div className="wrappercheckout">
            <div className='header'><p>FakeStore</p><ul><li><Link to='/'>Home</Link></li><li><Link to='../cart'>Cart{' ('}{count}{')'}</Link></li></ul></div>
            <div className="mid">
                <h1>Thank you for shopping at FakeStore!</h1>
                <h2>Please come again!</h2>
            </div>
            <div className='footer'>I'm a footer!</div>
        </div>    
    )
}

export default Checkout