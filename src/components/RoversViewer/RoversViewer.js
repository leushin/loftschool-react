// Здесь вам нужно реализовать вью

// Подключите его к редакс роутеру
// Вам потребуются селекторы для получения выбранного сола
// и списка фотографий

// Так же вы будете диспатчить экшены CHANGE_SOL и FETCH_PHOTOS_REQUEST
// Эти экшены находятся в модуле ROVER PHOTOS
import React, { Component } from 'react';
import styles from './RoversViewer.module.css';
import SelectSol from '../SelectSol';
import RoverPhotos from '../RoverPhotos';
import { connect } from 'react-redux';
import { getRovers, changeSol, fetchPhotosRequest, getChangeSol, getPhotosRover } from '../../modules/RoverPhotos';

class RoversViewer extends Component {
    constructor (props) {
        super(props)
        this.rovers = getRovers();
    }
    
    componentDidMount() {
        this.photoRequest();
    }

    componentDidUpdate(prevProps) {
        const { sol } = this.props;

        if (sol.current !== prevProps.sol.current) {
            this.photoRequest();
        }
    }

    photoRequest = () => {
        const { sol, fetchPhotosRequest } = this.props;

        this.rovers.forEach(rover => fetchPhotosRequest({
            name: rover,
            sol: sol.current
        }))
    }

    render() {
        const { sol, photos } = this.props;
        const initialPhotos = [];

        return (
            <div className={styles.root}>
                <SelectSol
                    selectedSol={sol.current}
                    minSol={sol.min}
                    maxSol={sol.max}
                    {...this.props}
                />
                <div className={styles.wrapper}>
                    {
                        this.rovers.map(roverName => (
                            <RoverPhotos
                                key={roverName}
                                name={roverName}
                                photos={
                                    (photos[roverName][sol.current])
                                        ? photos[roverName][sol.current].photos
                                        : initialPhotos
                                }
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    sol: getChangeSol(state),
    photos: getPhotosRover(state)
});

const mapDispatchToProps = { changeSol, fetchPhotosRequest };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RoversViewer);
