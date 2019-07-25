import React, {Component} from 'react';
import {Redirect} from "react-router-dom";


class Edit extends Component{

    handleSubmit(event) {
    event.preventDefault();
    this.props.updateChoices({
        choices: this.props.scrawl.choices,
    });
}

    render() {

        if(this.props.id){
            return <Redirect to={"/scrawl/"+ this.props.slug}/>
        }

        return (
            <div>
            <section className="bg-blue">
                <h1>Edit Scrawly</h1>
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
                        <input type="date"placeholder="Scrawl Date" value={this.props.date} onChange={event => this.props.updateChoices(event.target.value)}/>
                            <button type="submit" className="button button-primary">
                                <i className="fa fa-plus"/>
                                    Add choice
                            </button>
                    </form>
                    <button type="submit"  className="button button-primary">
                        <i className="fa fa-check"/>
                        Finish
                    </button>
            </section>

        </div>
        )
        }
    }

export default Edit;