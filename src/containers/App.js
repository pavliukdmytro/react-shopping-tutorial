import {connect} from 'react-redux';
import {bindActionCreators}  from 'redux';
import * as booksAcrions  from '../actions/books';
import * as filterAcrions  from '../actions/filter';

import App from '../components/App.jsx';

const mapStateToProps = ({books}) => (
    {
        books: books.items,
        isReady: books.isReady
    }
);
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksAcrions, dispatch),
    ...bindActionCreators(filterAcrions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);