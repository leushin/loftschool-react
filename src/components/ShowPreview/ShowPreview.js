import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ShowPreview.module.css';

class ShowPreview extends Component {
    render () {
        const { image, name, id, summary } = this.props;

        return (
            <div className={`${styles.container} t-preview`}>
                <div>
                    <Link to={`/shows/${id}`} className='t-link'>{name}</Link>
                    {
                        image && <img alt={name} src={image.medium}/>
                    }
                </div>
                <div dangerouslySetInnerHTML={{__html: summary}}/>
            </div>
        )
    }
}

export default ShowPreview;
