import React, {Component} from 'react';
import {Redirect} from "react-router-dom";


class Edit extends Component{

    handleSubmit(event) {
    event.preventDefault();
    this.props.choiceAdd({
        choices: this.props.choices,
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
                <input type="text" id="title" value={this.props.title} disabled/>
                    <ul>
                        <li>
                            {this.props.choices}
                        </li>
                    </ul>
                    <form>
                        <input type="date"/>
                            <button type="submit" className="button button-primary" onChange={event => this.props.choiceAdd(event.target.value)} value={this.props.choices}>
                                <i className="fa fa-plus"/>
                                    Add
                            </button>
                    </form>
                    <button type="submit" onSubmit={event => this.handleSubmit(event)} className="button button-primary">
                        <i className="fa fa-check"/>
                        Finish
                    </button>
            </section>

        </div>
        )
        }
    }

export default Edit;