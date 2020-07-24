import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const SIGNIN_MUTATION = gql`
    mutation SIGNIN_MUTATION($email: String!, $password: String!) {
        signin(email: $email, password: $password) {
            id 
            email
            name
        }
    }
`;

class Signin extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    };
    
    saveToState = e => {
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <Mutation 
                mutation={SIGNIN_MUTATION} 
                variables={this.state}
                refetchQueries= {[ { query: CURRENT_USER_QUERY } ]}
            >
                {( signup, {loading, error } ) => (
                    <Form method="POST" onSubmit={(e) => {
                        e.preventDefault();
                        signup();
                    }}>
                        <fieldset disabled={loading} aria-busy={loading}>
                            <h2>Signin to your account</h2>
                            <Error error={error} />
                            <label htmlFor="email">
                                Email
                                <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.saveToState} />
                            </label>

                            <label htmlFor="password">
                                Password
                                <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.saveToState} />
                            </label>
                        </fieldset>

                        <button type="Submit">Signin</button>
                    </Form>
                )}
            </Mutation>
        )
    }
}

export default Signin;