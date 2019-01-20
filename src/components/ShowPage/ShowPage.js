import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './ShowPage.module.css';
import { fetchShowsRequest } from '../../actions';

class ShowPage extends Component {
    componentDidMount () {
        const { fetchShowsRequest, match } = this.props;
        fetchShowsRequest(match.params.id);
    }

    renderShow = data => (
        <div className='App'>
            <p>{data.name}</p>
            {
                data.image && <img alt={data.name} src={data.image.medium}/>
            }
            <div dangerouslySetInnerHTML={{__html: data.summary}}/>
            <div className={styles.cast}>
                {data._embedded &&
                    data._embedded.cast.map(actor => (
                            <div key={`${actor.character.id} + ${ actor.person.id}`} className='t-person'>
                                <p>{actor.person.name}</p>
                                {
                                    actor.person.image &&
                                    <img alt={actor.person.name} src={actor.person.image.medium}/>
                                }            
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );

    renderError = error => (<div className='App'>Произошла ошибка: {error.message}</div>);

    render () {
        const { isFetching, showData, error } = this.props;

        if (isFetching) {
            return (<p>Загрузка...</p>);
        } else if (error) {
            return this.renderError(error);
        } else if (showData) {
            return this.renderShow(showData);
        } else {
            return (<p>Что-то пошло не так. Попробуйте воспользоваться сервисом позже...</p>);
        }
    }
}

const mapStateToProps = state => state.show;
const mapDispatchToProps = { fetchShowsRequest };

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
