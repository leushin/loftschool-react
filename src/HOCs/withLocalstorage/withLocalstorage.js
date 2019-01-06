import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localStorageKey, initialData) => (WrappedComponent) => {
    return class extends Component {
        saveData = (data) => {
            save(localStorageKey, data)
            this.forceUpdate();
        }

        savedData = () => load(localStorageKey) || initialData

        render () {
            return (
                <WrappedComponent
                    savedData={this.savedData()}
                    saveData={this.saveData}
                    {...this.props}
                />
            );
        }
    };
};

export default withLocalstorage;
