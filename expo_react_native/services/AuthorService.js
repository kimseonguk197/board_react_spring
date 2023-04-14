import axios from 'axios';

const AUTHOR_API_BASE_URL = "http://ab5d-175-208-136-129.ngrok.io/authors";

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