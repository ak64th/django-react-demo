/* global Urls */
import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {article: null};
    }

    componentDidMount() {
        const {match} = this.props;
        const articleId = match.params.articleId;
        this.loadArticle(articleId);
    }

    loadArticle(articleId) {
        const url = Urls['blog:article-detail'](articleId);
        const query = `fields=${['title,description'].join()}`;
        fetch(`${url}?${query}`)
            .then((resp) => resp.json())
            .then((article) => this.setState({article}));
    }

    render() {
        const {article} = this.state;
        if (!article) return '';
        return (
            <div>
                <h3>{article.title}</h3>
                <div>{article.description}</div>
            </div>
        );
    }
}

Article.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            articleId: PropTypes.string.isRequired,
            slug: PropTypes.string,
        }).isRequired,
    }).isRequired,
};

export default Article;