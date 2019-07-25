import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";


class Edit extends Component{


    componentDidMount() {
        const slug = /[^/]*$/.exec(this.props.location.pathname)[0];
        this.props.search(slug);
    }

    handleSubmit(event) {
    event.preventDefault();
    this.props.choicesAdd({
        date: this.props.scrawl.choices,
        poll: this.props.scrawl["@id"],
    });
}

    render() {

        if(this.props.id){
            return <Redirect to={"/scrawl/"+ this.props.slug}/>
        }

        return (
            <div>
            <section className="bg-blue">
                <h1><Link to="/"><i className="fa fa-home"/></Link>Edit your scrawl</h1>
            </section>
            <section className="container form-new">

                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={this.props.scrawl.title}/>
                    <ul>
                        <li>
                            {this.props.scrawl.choices}
                        </li>
                    </ul>
                    <form onSubmit={event => this.handleSubmit(event)}>
                        <input type="date" placeholder="Scrawl Date" value={this.props.date} onChange={event => this.props.updateChoices(event.target.value)}/>
                            <button type="submit" className="button button-primary">
                                <i className="fa fa-plus"/>
                                    Add choice
                            </button>
                    </form>
                    <button type="submit" className="button button-primary" onSubmit={event => this.handleSubmit(event)}>
                        <i className="fa fa-check"/>
                        Finish
                    </button>
            </section>

        </div>
        )
        }
    }

export default Edit;