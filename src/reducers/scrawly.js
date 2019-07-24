import {
    CREATE_SCRAWL_LOADING,
    CREATE_SCRAWL_SUCCESS,
    CREATE_SCRAWL_ERROR,
    CHOICE_ADD,
    CHOICE_REMOVE,
    SEARCH_SCRAWL_LOADING,
    SEARCH_SCRAWL_SUCCESS,
    SEARCH_SCRAWL_ERROR,
    UPDATE_SLUG,
    UPDATE_TITLE, CHOICE_SHOW
} from '../actions/scrawly'
import slugme from 'slugme'

const initialState = {
    scrawl: {
        title:"",
        slug:"",
        choices: [],
        people:[],
    },
    error: "",
    scrawlLoading: false,
    createScrawlLoading: false
};

function scrawlyApp (state = initialState, action){
    switch (action.type) {
        case UPDATE_SLUG:
            return {...state,
                scrawl: { ...state.scrawl, slug:slugme(action.payload)}
            };
        case UPDATE_TITLE:
            return {...state,
                scrawl: { ...state.scrawl, title: action.payload, slug:slugme(action.payload)}
            };
        case SEARCH_SCRAWL_LOADING:
            return{...state,
                scrawlLoading: true
            };
        case SEARCH_SCRAWL_SUCCESS:
            return{...state,
                scrawl: action.payload,
                scrawlLoading: false
            };
        case SEARCH_SCRAWL_ERROR:
            return{...state,
                error: "Scrawl introuvable !",
                scrawlLoading: false
            };
        case CREATE_SCRAWL_LOADING:
            return { ...state, createScrawlLoading: true };

            case CREATE_SCRAWL_SUCCESS:
            return {
                ...state,
                scrawl: action.payload,
                createScrawlLoading: false
            };
        case CREATE_SCRAWL_ERROR:
            return {
                ...state,
                error: "Erreur lors de la création du Scrawl !",
                createScrawlLoading: false
            };

        case CHOICE_ADD:
            return{...state.choices, choices: action.payload};

        default:
            return state;
    }
}
export default scrawlyApp;