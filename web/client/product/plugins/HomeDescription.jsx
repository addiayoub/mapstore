
import React from 'react';

import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import "../../product/assets/css/maps.css";

class HomeDescription extends React.Component {
    render() {
        return (
            <Jumbotron className="imgcid" >
                <Grid>
                    <Row>
                        <Col xs={12} className="text-center">
                            <h1>CID</h1>
                            <p >
                            Conseil Ingénierie et développement
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </Jumbotron>
        );
    }
}

export default {
    HomeDescriptionPlugin: HomeDescription
};
