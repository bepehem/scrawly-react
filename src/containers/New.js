import {connect} from "react-redux";
import {updateSlug, updateTitle, createScrawl} from "../actions/scrawly";
import New from "../components/New";

// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        slug: state.scrawly.scrawl.slug,
        title: state.scrawly.scrawl.title,
        loading: state.scrawly.createScrawlLoading,
        id: state.scrawly.scrawl["@id"]
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    createScrawl: scrawl => dispatch(createScrawl(scrawl)),
    updateSlug: slug => dispatch(updateSlug(slug)),
    updateTitle: title => dispatch(updateTitle(title))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(New)