import {connect} from "react-redux";
import Scrawl from "../components/Scrawl";
import {searchScrawl} from "../actions/scrawly";

const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl,
        loading: state.scrawly.scrawlLoading
    }
};

const mapDispatchToProps = dispatch => ({
    search: slug => dispatch(searchScrawl(slug))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Scrawl)