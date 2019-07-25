export const CREATE_SCRAWL_LOADING = "CREATE_SCRAWL_LOADING";
export const CREATE_SCRAWL_SUCCESS = "CREATE_SCRAWL_SUCCESS";
export const CREATE_SCRAWL_ERROR = "CREATE_SCRAWL_ERROR";
export const CHOICE_ADD_SUCCESS = "CHOICE_ADD_SUCESS";
export const CHOICE_ADD_ERROR = "CHOICE_ADD_ERROR";
export const CHOICE_ADD_LOADING = "CHOICE_ADD_LOADING";
export const SEARCH_SCRAWL_LOADING = "SEARCH_SCRAWL_LOADING";
export const SEARCH_SCRAWL_SUCCESS = "SEARCH_SCRAWL_SUCCESS";
export const SEARCH_SCRAWL_ERROR = "SEARCH_SCRAWL_ERROR";
export const UPDATE_CHOICES = "UPDATE_CHOICES";
export const UPDATE_SLUG = "UPDATE_SLUG";
export const UPDATE_TITLE = "UPDATE_TITLE";


export function updateSlug(slug){
    return {
        type: UPDATE_SLUG,
        payload: slug
    };
}

export function updateTitle(title){
    return{
        type: UPDATE_TITLE,
        payload: title
    }
}

export function updateChoices(choices){
    return{
        type: UPDATE_CHOICES,
        payload: choices
    }
}

export function searchScrawl(slug) {
    return dispatch =>{
        dispatch(searchScrawlLoading());
        fetch(process.env.REACT_APP_API + 'polls?slug='+slug)
            .then(response=>response.json())
            .then(data =>{
                if(data["hydra:member"].length >0){
                    dispatch(searchScrawlSuccess(data["hydra:member"][0]))
                } else{
                    dispatch(searchScrawlError());
                }
            });
    }
}

export function searchScrawlLoading(){
    return{
        type: SEARCH_SCRAWL_LOADING,
        payload: null
    }
}

export function searchScrawlSuccess(scrawl){
    return{
        type: SEARCH_SCRAWL_SUCCESS,
        payload: scrawl
    }
}

export function searchScrawlError(scrawl){
     return{
         type: SEARCH_SCRAWL_ERROR,
         payload: null
     }
}

/**
 * CREATE SCRAWL
 */

export function createScrawl(scrawl) {
    return dispatch => {
        dispatch(createScrawlLoading());
        fetch(process.env.REACT_APP_API + 'polls', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(scrawl)
        })
            .then(response => response.json())
            .then(data => {
                if(data["@type"] !== "hydra:Error") {
                    dispatch(createScrawlSuccess(data))
                } else{
                    dispatch(createScrawlError());
                }
            })
    }
}

export function createScrawlSuccess(scrawl) {
    return {
        type: CREATE_SCRAWL_SUCCESS,
        payload: scrawl
    }
}

export function createScrawlError() {
    return { type: CREATE_SCRAWL_ERROR }
}

export function createScrawlLoading() {
    return { type: CREATE_SCRAWL_LOADING }
}

/**
 * CHOICES
 */



export function choiceAdd(choice) {
    return dispatch => {
        dispatch(choiceAddLoading());
        fetch(process.env.REACT_APP_API + 'choices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(choice)
        })
            .then(response => response.json())
            .then(data => {
                if (data["@type"] !== "hydra:Error") {
                    dispatch(choiceAddSuccess(data))
                } else {
                    dispatch(choiceAddError());
                }
            });
    }
}

export function choiceAddSuccess(choice) {
     return {
        type: CHOICE_ADD_SUCCESS,
        payload: choice
    }
}

export function choiceAddError(choice) {
    return {type: CHOICE_ADD_ERROR}
}

export function choiceAddLoading(choice) {
    return {type: CHOICE_ADD_LOADING}
}