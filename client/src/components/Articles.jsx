/* global Urls */
import React from 'react';
import PropTypes from 'prop-types';
import {Link, Route} from 'react-router-dom';
import Article from './Article.jsx';


class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {articles: []};
    }

    componentDidMount() {
        const url = Urls['article-list']();
        fetch(url)
            .then((resp) => resp.json())
            .then((articles) => this.setState({articles}));
    }

    render() {
        const {match} = this.props;
        const {articles} = this.state;
        return (
            <div className="container">
                <h2>Articles</h2>
                <ul>
                    {articles.map((article) =>
                        <li key={article.id}>
                            <Link to={`${match.url}/${article.id}/${article.slug}`}>
                                {article.title}
                            </Link>
                        </li>
                    )}
                </ul>
                <Route path={`${match.path}/:articleId/:slug?`} render={(props) =>
                    <Article key={props.match.params.articleId} {...props}/>
                }/>
                <Route exact path={match.path} render={() => (
                    <h3>Please select an article.</h3>
                )}/>
            </div>
        );
    }
}

Articles.propTypes = {
    match: PropTypes.object.isRequired,
};

export default Articles;