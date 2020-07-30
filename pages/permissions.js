import PleaseSignin from '../components/PleaseSignin';
import Permissions from '../components/Permissions';

const permssionsPage = props => (
    <div>
        <PleaseSignin>
            <Permissions />
        </PleaseSignin>
    </div>
)

export default permssionsPage;