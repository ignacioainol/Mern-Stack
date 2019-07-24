import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { Redirect } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateNote extends Component {

    state = {
        users: [],
        userSelected: '',
        title: '',
        content: '',
        date: new Date(),
        editing: false,
        _id: '',
        redirect: false
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data.map(user => user.username),
            userSelected: res.data[0].username
        });

        if(this.props.match.params.id){
            const res = await axios.get('http://localhost:4000/api/notes/' + this.props.match.params.id);
            console.log(res.data);
            this.setState({
                userSelected: res.data.author,
                title: res.data.title,
                content: res.data.content,
                date: new Date(res.data.date),
                editing: true
            });
        }   

    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if(this.state.editing){
            const id = this.props.match.params.id;
            await axios.put('http://localhost:4000/api/notes/' + id,{
                title: this.state.title,
                content: this.state.content,
                date: this.state.date,
                author: this.state.userSelected
            });
        }else{
            await axios.post('http://localhost:4000/api/notes',{
                title: this.state.title,
                content: this.state.content,
                author: this.state.userSelected,
                date: this.state.date
            });
        }

        this.setState({
            redirect: true
        });
        
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onChangeDate = (date) => {
        this.setState({
            date
        })
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4> { (this.state.editing) ? 'Edit Note' : 'Create Note'} </h4>
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <select 
                                className="form-control" 
                                name="userSelected"
                                onChange={this.onInputChange}
                                value={this.state.userSelected}
                                >
                                    {
                                        this.state.users.map(user => 
                                        <option key={user} value={user} >
                                            {user}
                                        </option>)
                                    }
                            </select>
                        </div>

                        <div className="form-group">
                            <input type="text"
                                   name="title" required 
                                   className="form-control"
                                   value={this.state.title}
                                   onChange={this.onInputChange}
                                   placeholder="Title" />
                        </div>

                        <div className="form-group">
                            <textarea name="content" 
                                      cols="2" 
                                      className="form-control" 
                                      onChange={this.onInputChange}
                                      value={this.state.content}
                                      placeholder="Description"></textarea>
                        </div>

                        <div className="form-group">
                            <DatePicker 
                                value={this.state.date}
                                className="form-control"
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                                />
                        </div>

                        <button className="btn btn-primary btn-block">{(this.state.editing) ? 'Edit Note': 'Save Note'}</button>
                    </form>
                </div>
                {this.renderRedirect()}
            </div>
        )
    }
}
