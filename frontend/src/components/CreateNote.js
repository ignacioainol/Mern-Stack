import React, { Component } from 'react';
import axios from 'axios';

export default class CreateNote extends Component {

    state = {
        users: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data.map(user => user.username)
        });
        console.log(this.state.users);
    }

    onSubmit = (e) => {
        e.preventDefault();
        
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Create Note</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" name="title" className="form-control" placeholder="Title" />
                        </div>

                        <div className="form-group">
                            <textarea name="description" cols="2" className="form-control" placeholder="Description"></textarea>
                        </div>

                        <div className="form-group">
                            <select 
                                className="form-control" 
                                name="userSelected"
                                >
                                    {
                                        this.state.users.map(user => 
                                        <option key={user}>
                                            {user}
                                        </option>)
                                    }
                            </select>
                        </div>

                        <button className="btn btn-primary btn-block">Save Note</button>
                    </form>
                </div>
            </div>
        )
    }
}
