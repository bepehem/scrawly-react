import React, {Component} from 'react';
import md5 from 'md5';
import ScrawlChoices from "./scrawlElements/ScrawlChoices";
import {Link} from "react-router-dom";

class Scrawl extends Component {

    componentDidMount() {
        if (!this.props.scrawl["@id"]) {
            this.props.search(this.props.match.params.slug);
        }

        const slug = /[^/]*$/.exec(this.props.location.pathname)[0];
        this.props.search(slug);
    }

    render() {

        if (this.props.loading) {
            return <div>Chargement en cours...</div>;
        } else if (!this.props.scrawl["@id"]) {
            return <div>Scrawl introuvable ! </div>;
        }

        const gravatar = 'https://www.gravatar.com/avatar/' + md5('email du state ici') + '?s=32&d=robohash';

        return (
            <div>
                <section className="bg-blue">
                    <h1><Link to="/"><i className="fa fa-home"/></Link>{this.props.scrawl.title}</h1>
                </section>

                <section className = "container">
                    <table className = "poll">
                        <thead>
                        <tr>
                            <th></th>
                            <th>
                                <div className="date-container">
                                    <div className="month">Jan</div>
                                    <div className="date">12</div>
                                    <div className="day">Saturday</div>
                                </div>
                            </th>
                            <th>
                                <div className = "date-container">
                                    <div className = "month"> Jan </div>
                                    <div className="date">13</div>
                                    <div className = "day">Sunday</div>
                                </div>
                            </th>
                            <th>
                                <div className="date-container">
                                    <div className="month">Jan</div>
                                    <div className="date">19</div>
                                    <div className="day">Saturday</div>
                                </div>
                            </th>
                            <th>
                                <div className="date-container">
                                    <div className="month">Jan</div>
                                    <div className="date">20</div>
                                    <div className="day">Sunday</div>
                                </div>
                            </th>
                            <th>
                                <div className="date-container">
                                    <div className="month">Jan</div>
                                    <div className="date">26</div>
                                    <div className="day">Saturday</div>
                                </div>
                            </th>
                            <th>
                                <div className="date-container">
                                    <div className="month">Jan</div>
                                    <div className="date">27</div>
                                    <div className="day">Sunday</div>
                                </div>
                            </th>
                            <th></th>
                        </tr>
                        </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="user-container">
                                    <img src={gravatar} alt="avatar"/>
                                    <span>John Doe</span>
                                </div>
                            </td>
                            <td className="available"><i className="fa fa-3x fa-check-circle"/></td>
                            <td className="available"><i className="fa fa-3x fa-check-circle"/></td>
                            <td className="unavailable"><i className="fa fa-3x fa-times-circle"/></td>
                            <td className="unavailable"><i className="fa fa-3x fa-times-circle"/></td>
                            <td className="available"><i className="fa fa-3x fa-check-circle"/></td>
                            <td className="unavailable"><i className="fa fa-3x fa-times-circle"/></td>
                            <td>
                                <a href="#">
                                <i className="fa fa-2x fa-edit"/>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-container">
                                    <img src={gravatar} alt="avatar"/>
                                    <span>Jack Fieldman</span>
                                </div>
                            </td>
                            <td className="unavailable"><i className="fa fa-3x fa-times-circle"/></td>
                            <td className="available"><i className="fa fa-3x fa-check-circle"/></td>
                            <td className="unavailable"><i className="fa fa-3x fa-times-circle"/></td>
                            <td className="available"><i className="fa fa-3x fa-check-circle"/></td>
                            <td className="unavailable"><i className="fa fa-3x fa-times-circle"/></td>
                            <td className="available"><i className="fa fa-3x fa-check-circle"/></td>
                            <td>
                                <a href="#">
                                <i className="fa fa-2x fa-edit"/>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-container">
                                    <img src={gravatar} alt="avatar"/>
                                    <span>Howard Thomson</span>
                                </div>
                            </td>
                            <td className="available"><i className="fa fa-3x fa-check-circle"/></td>
                            <td className="available"><i className="fa fa-3x fa-check-circle"/></td>
                            <td className="available"><i className="fa fa-3x fa-check-circle"/></td>
                            <td className="unavailable"><i className="fa fa-3x fa-times-circle"/></td>
                            <td className="available"><i className="fa fa-3x fa-check-circle"/></td>
                            <td className="available"><i className="fa fa-3x fa-check-circle"/></td>
                            <td>
                                <a href="#"><i className="fa fa-2x fa-edit"/></a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-form-container">
                                    <input type="email" name="email" placeholder="Email"/>
                                    <input type="text" name="name" placeholder="Fullname"/>
                                </div>
                            </td>
                            <td>
                            <input type="checkbox"/>
                            </td>
                            <td>
                            <input type="checkbox"/>
                            </td>
                            <td>
                            <input type="checkbox"/>
                            </td>
                            <td>
                            <input type="checkbox"/>
                            </td>
                            <td>
                            <input type="checkbox"/>
                            </td>
                            <td>
                            <input type="checkbox"/>
                            </td>
                            <td>
                                <button type="submit" className="button button-primary">
                                <i className="fa fa-2x fa-save"/>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
        )
    }
}

export default Scrawl;
