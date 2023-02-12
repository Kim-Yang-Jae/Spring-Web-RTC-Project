import { apiInstance } from "./index.js";

const api = apiInstance();

async function searchAll(search, success, fail) {
    console.log(search.keyword + " ------- ");
    console.log(search.condition + " ------- ");
    console.log(search.categoryList + " ------- ");
    console.log(search);
    await api.get(`/debates?keyword=${search.keyword}&condition=${search.condition}&categoryList=${search.categoryList}`).then(success).catch(fail);
}

async function getCategoryList(success, fail){
    await api.get(`/codes/category`).then(success).catch(fail);  
}

export { searchAll, getCategoryList };
