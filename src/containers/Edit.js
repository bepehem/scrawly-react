import {connect} from "react-redux";
import {searchScrawl, updateChoices, updateSlug} from "../actions/scrawly";
import Edit from "../components/Edit";

// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl,
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    search: slug => dispatch(searchScrawl(slug)),
    updateSlug: slug => dispatch(updateSlug(slug)),
    updateChoices: choices => dispatch(updateChoices(choices)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit)