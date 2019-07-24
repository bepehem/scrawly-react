import {connect} from "react-redux";
import {choiceAdd} from "../actions/scrawly";
import Edit from "../components/Edit";

// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        title: state.scrawly.scrawl.title,
        slug: state.scrawly.scrawl.slug,
        choices: state.scrawly.scrawl.choices,
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    choiceAdd : choices => dispatch(choiceAdd(choices)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit)