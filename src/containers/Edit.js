import {connect} from "react-redux";
import {searchScrawl, updateChoices, updateSlug, choicesAdd} from "../actions/scrawly";
import Edit from "../components/Edit";

// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl,
        poll: state.scrawly.scrawl["@id"],
        loading: state.scrawly.scrawlLoading,
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    search: slug => dispatch(searchScrawl(slug)),
    updateSlug: slug => dispatch(updateSlug(slug)),
    updateChoices: choices => dispatch(updateChoices(choices)),
    choicesAdd: choices => dispatch(choicesAdd(choices)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit)