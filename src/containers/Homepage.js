import {connect} from "react-redux";
import {searchScrawl, updateSlug} from "../actions/scrawly";
import Homepage from "../components/Homepage";

// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        id:state.scrawly.scrawl["@id"],
        slug: state.scrawly.scrawl.slug
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    updateSlug: slug => dispatch(updateSlug(slug)),
    search: slug => dispatch(searchScrawl(slug))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Homepage)
