import React, { Component } from 'react';
import { getShowInfo } from '../../api';
import './Show.css';

class Show extends Component {
    state = {
        showId: '',
        data: null
    }

    componentDidUpdate (prevProps) {
        this.props.showId !== prevProps.showId && getShowInfo(this.props.showId)
            .then(data => {
                this.setState({
                    data: data
                });
            });
    }

    render () {
        const { data } = this.state;
        if (data) {
            return (
                <div className="show">
                    <img className="show-image" src={data.image.medium} alt={data.name} />
                    <h2 className="show-label t-show-name">{data.name}</h2>
                    <p className="show-text t-show-genre"><b>Жанр: </b>{data.genres.join(', ')}</p>
                    <p className="show-text t-show-summary" dangerouslySetInnerHTML={{ __html: data.summary }} />
                </div>
            );
        } else {
            return (<p className="show-inforation t-show-info">Шоу не выбрано</p>);
        }
    }
}

export default Show;
