import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class New extends Component {

    handleSubmit(event) {
        event.preventDefault();
        if (!this.props.loading) {
            this.props.createScrawl({
                title: this.props.title,
                slug: this.props.slug
            });
        }
    }

    render() {
        if(this.props.id){
            return <Redirect to={"/edit/"+ this.props.slug}/>
        }

        return (
            <div>
                <section className="bg-blue">
                    <h1>New Scrawl</h1>
                </section>

                <section className = "container form-new" >

                    <form onSubmit={event => this.handleSubmit(event)}>
                        <div>
                            <label htmlFor= "title"> Titre </label>
                            <input type="text" id="title" value={this.props.title} onChange={event => this.props.updateTitle(event.target.value)} placeholder="titre"/>
                        </div>
                        <div>
                            <label htmlFor="slug"> Slug </label>
                            <input type="text" id="slug" value={this.props.slug} onChange={event => this.props.updateSlug(event.target.value)} placeholder="slug"/>
                        </div>
                        <button type="submit" className="button button-primary">
                            <i className={"fa " + (this.props.loading ? "fa-spinner fa-pulse" : "fa-arrow-right")}/>
                            Create and add new dates
                        </button>
                    </form>
                </section>
            </div>
        )

    }
}

export default New;
