import {CHANGE_SEARCH_FIELD} from './constant.js'

export const setSearchFiled = (text) => ({
type: CHANGE_SEARCH_FIELD,
playload : text 
});