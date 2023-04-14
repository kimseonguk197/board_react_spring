import axios from 'axios';

const AUTHOR_API_BASE_URL = "http://localhost:8081/authors";

class AuthorService {

    getAuthors() {
        return axios.get(AUTHOR_API_BASE_URL);
    }

    getAuthorById(authorId) {
        return axios.get(AUTHOR_API_BASE_URL + '/findById/' + authorId);
    }

    createAuthor(author) {
        return axios.post(AUTHOR_API_BASE_URL +'/new', author);
    }

}

export default new AuthorService();