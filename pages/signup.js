import Signup from '../components/Signup';
import Signin from '../components/Signin';
import RequestReset from '../components/RequestReset';
import Styled from 'styled-components';

const Columns = Styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
`;

const SignupPage = props => (
    <div>
        <Columns>
            <Signup />
            <Signin />
            <RequestReset />
        </Columns>
    </div>
)

export default SignupPage;