import React, { Component } from 'react'
import axios from 'axios';

export default class NotesList extends Component {
    state = {
        notes: []
    }

    componentDidMount = async () => {
        const res = await axios.get('http://localhost:4000/api/notes');
        this.setState({
            notes: res.data
        });
        console.log(res.data);
    }
    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note => (
                        <div className="col-md-3" key={note._id}>
                            <div className="card">
                                <div className="card-header">
                                    <h4>{note.title}</h4>
                                </div>
                                <div className="card-body">
                                    <p>{note.content}</p>
                                </div>
                                <div className="card-footer">
                                    <i className="text-right"> <h6>{note.author}</h6> </i>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
