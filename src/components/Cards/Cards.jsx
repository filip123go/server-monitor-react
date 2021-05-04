import React from 'react'
import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import styles from './Cards.module.css';
import CountUp from "react-countup";
import cx from 'classnames';

const Cards = ({healthData, infoData}) => {
    if (!healthData.data) {
        return 'loading...';
    }

    if (!infoData.data) {
        return 'loading...';
    }
    let overallStatus = styles.deaths;
    let dbStatus = styles.deaths;
    let hddStatus = styles.deaths;

    if (healthData.status === 200) {
        overallStatus = styles.recovered;
    }

    if (healthData.data.components.db.status === 'UP') {
        dbStatus = styles.recovered;
    }

    if (healthData.data.components.diskSpace.status === 'UP') {
        hddStatus = styles.recovered;
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">

                <Grid item component={Card} xs={12} md={5} className={cx(styles.card, overallStatus)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Server Time </Typography>
                        <Typography variant="subtitle1"> {infoData.data.time} </Typography>
                        <Typography color="textSecondary" gutterBottom> Overall Status </Typography>
                        <Typography variant="subtitle1"> {healthData.status} {healthData.statusText} </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={5} className={cx(styles.card, dbStatus)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Database Status </Typography>
                        <Typography variant="subtitle1"> {healthData.data.components.db.status}  </Typography>
                        <Typography color="textSecondary" gutterBottom> Database </Typography>
                        <Typography variant="subtitle1"> {healthData.data.components.db.details.database} </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={5} className={cx(styles.card, hddStatus)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Hard Disk Status </Typography>
                        <Typography variant="subtitle1">   {healthData.data.components.diskSpace.status} </Typography>
                        <Typography color="textSecondary" gutterBottom>Total Capacity </Typography>
                        <Typography variant="subtitle1">
                            <CountUp start={0} end={healthData.data.components.diskSpace.details.total} duration={2} separator="."/> &nbsp; bytes</Typography>
                        <Typography color="textSecondary" gutterBottom>Free Disk Space </Typography>
                        <Typography variant="subtitle1">
                            <CountUp start={0} end={healthData.data.components.diskSpace.details.free} duration={2} separator="."/> &nbsp; bytes</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;