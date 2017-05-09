/*    STATUS: 200 OK
 *    DATA: {
 *      "title":  "Casablanca",
 *      "year": 1942,
 *      "rating": 8.5
 *    }
 *    LINK: http://www.mocky.io/v2/5911dd84120000250a0fb77d
 *
 *    STATUS: 200 OK
 *    DATA: {
 *      "title":  "Pulp Fiction",
 *      "year": 1994,
 *      "rating": 8.9
 *    }
 *    LINK: http://www.mocky.io/v2/5911df4b120000660a0fb780
 *
 *    STATUS: 200 OK
 *    DATA: {
 *      "title":  "The Dark Knight",
 *      "year": 2008,
 *      "rating": 8.9
 *    }
 *    LINK: http://www.mocky.io/v2/5911df721200006a0a0fb781
 *
 *    STATUS: 200 OK
 *    DATA: {
 *      "title":  "Aliens",
 *      "year": 1986,
 *      "rating": 8.4
 *    }
 *    LINK: http://www.mocky.io/v2/5911df911200006a0a0fb782
 *
 *   STATUS: 408 Request Timeout
 *   DATA: {}
 *   LINK: http://www.mocky.io/v2/5911dfa9120000660a0fb783
 */

import axios from 'axios'
import _ from 'lodash'

const moviesUrl = [
    'http://www.mocky.io/v2/5911dd84120000250a0fb77d',
    'http://www.mocky.io/v2/5911df4b120000660a0fb780',
    'http://www.mocky.io/v2/5911df721200006a0a0fb781',
    'http://www.mocky.io/v2/5911df911200006a0a0fb782'
];

const errorUrl = 'http://www.mocky.io/v2/5911dfa9120000660a0fb783';

export default class Api {

    fetchMovie() {
        const error = (_.random(0, 1) === 1);
        let url = moviesUrl[_.random(0, 3)]; //fetch a random movie
        let requestConfig;

        if (error) {
            url = errorUrl;
        }

        return axios.get(url);
    }
};
