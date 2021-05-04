import React from 'react';
import Cards from "./components/Cards/Cards";
import styles from './App.module.css';
import {fetchInfo, fetchMappings} from './api';
import {fetchHealth} from './api';

class App extends React.Component {
    state = {
        healthData: {},
        mappingData: {},
        infoData: {}
    }

    async componentDidMount() {
        const mappingData = await fetchMappings();
        this.setState({mappingData: mappingData});

        const healthData = await fetchHealth();
        this.setState({healthData: healthData});

        const infoData = await fetchInfo();
        this.setState({infoData: infoData})
    }

    render() {

        const {healthData} = this.state;
        const {infoData} = this.state;

        return (
            <div className={styles.container}>
                <Cards healthData={healthData} infoData={infoData}/>
            </div>
        )
    }
}

export default App;