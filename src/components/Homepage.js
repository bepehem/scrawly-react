import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";

class Homepage extends Component{

handleSubmit(event) {
    event.preventDefault();
    this.props.search(this.props.slug);
}

render() {
    if(this.props.id){
       return <Redirect to={"/scrawl/"+ this.props.slug}/>
    }

    return (
        <div>
            <section className="homepage bg-blue">

                <h1>🔆 Scrawly 🔆</h1>

                <form onSubmit={event=> this.handleSubmit(event)}>
                    <input type="text" value={this.props.slug} onChange={event => this.props.updateSlug(event.target.value)} placeholder="Scrawl slug"/>
                    <input type="submit" value="GO!"/>
                </form>
                <Link to="/new" className="btn">
                    <i className="fa fa-plus"/>
                    Create a new Scrawl
                </Link>


            </section>

        </div>

        )
    }
}

export default Homepage;