import Signup from '../components/Signup';
import Styled from 'styled-components';
import Signin from '../components/Signin';

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
        </Columns>
    </div>
)

export default SignupPage;