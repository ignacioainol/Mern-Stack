import React, { Component } from 'react'
import axios from 'axios';
//import {format} from 'timeago.js';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { FaEdit, FaTimesCircle } from 'react-icons/fa';
import 'moment/locale/es';  // without this line it didn't work
moment.locale('es');




export default class NotesList extends Component {
    state = {
        notes: []
    }

    componentDidMount = () => {
        this.getNotes();
    }

    getNotes = async e => {
        const res = await axios.get('http://localhost:4000/api/notes');
        this.setState({notes:res.data});
    }

    deleteNote = async (id) => {
        await axios.delete(`http://localhost:4000/api/notes/${id}`);
        this.getNotes();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note => (
                        <div className="col-md-4 p-2" key={note._id}>
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <h4>{note.title}</h4>
                                        </div>
                                        <div className="col-md-3">
                                            <Link to={'/edit/' + note._id }>
                                                <FaEdit className="editNote" />
                                            </Link>
                                            <FaTimesCircle className="deleteNote" onClick={ () => this.deleteNote(note._id)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p>{note.content}</p>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-md-6">
                                        <h6 className="text-left">{moment(note.date).startOf('minute').fromNow()}</h6>
                                        </div>
                                        <div className="col-md-6">
                                            <h6 className="text-right">{note.author}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
