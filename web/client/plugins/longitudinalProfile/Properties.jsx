import React, { useEffect, useState } from "react";
import { FormGroup, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import Select from "react-select";
import { createSelector } from 'reselect';
import axios from 'axios'; // Si vous ne l'utilisez pas déjà
import Message from "../../components/I18N/Message";
import FormControl from '../../components/misc/DebouncedFormControl';
import {
    changeReferential,
    changeDistance,
    changeChartTitle
} from "../../actions/longitudinalProfile";
import {
    configSelector,
    chartTitleSelector,
    distanceSelector,
    referentialSelector
} from '../../selectors/longitudinalProfile';

const Properties = ({
    chartTitle,
    config,
    distance,
    referential,
    onChangeReferential,
    onChangeDistance,
    onChangeChartTitle
}) => {

    const [referentials, setReferentials] = useState([]);  // État local pour les couches GeoServer

    // Fonction pour récupérer les couches depuis GeoServer
    const fetchGeoServerLayers = async () => {
        try {
            const response = await axios.get("http://localhost:8080/geoserver/wms?request=GetCapabilities");
            const layers = parseGeoServerResponse(response.data);
            setReferentials(layers);
        } catch (error) {
            console.error("Erreur lors de la récupération des couches depuis GeoServer:", error);
        }
    };

    // Parse le XML de réponse GetCapabilities pour extraire les couches
    const parseGeoServerResponse = (xmlData) => {
        // Implémentation du parsing XML pour extraire les couches
        // Cela peut dépendre de la structure de votre GeoServer
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, "text/xml");
        const layerElements = xmlDoc.getElementsByTagName("Layer");
        return Array.from(layerElements).map(layer => ({
            value: layer.getElementsByTagName("Name")[0].textContent,
            label: layer.getElementsByTagName("Title")[0].textContent
        }));
    };

    // Appeler la fonction une seule fois au montage du composant
    useEffect(() => {
        fetchGeoServerLayers();
    }, []);

    return (
        <div className="longitudinal-container">
            <FormGroup>
                <ControlLabel><Message msgId="longitudinalProfile.settings.referential"/></ControlLabel>
                <Select
                    id="referential"
                    value={referential}
                    clearable={false}
                    options={referentials.length ? referentials : config.referentials.map(r => ({value: r.layerName, label: r.title}))}
                    onChange={(selected) => onChangeReferential(selected?.value)}
                />
            </FormGroup>
            <FormGroup>
                <ControlLabel><Message msgId="longitudinalProfile.settings.distance"/></ControlLabel>
                <FormControl
                    id="distance"
                    min={1}
                    step={1}
                    type="number"
                    value={distance}
                    clearable={false}
                    onChange={(value) => onChangeDistance(value)}
                />
            </FormGroup>
            <FormGroup>
                <ControlLabel><Message msgId="longitudinalProfile.settings.chartTitle"/></ControlLabel>
                <FormControl
                    id="chartTitle"
                    value={chartTitle}
                    clearable={false}
                    onChange={(value) => onChangeChartTitle(value)}
                />
            </FormGroup>
        </div>
    );
};

const PropertiesConnected = connect(
    createSelector(
        [
            chartTitleSelector,
            configSelector,
            distanceSelector,
            referentialSelector
        ],
        (
            chartTitle,
            config,
            distance,
            referential
        ) => ({
            chartTitle,
            config,
            distance,
            referential
        })), {
        onChangeChartTitle: changeChartTitle,
        onChangeDistance: changeDistance,
        onChangeReferential: changeReferential
    })(Properties);

export default PropertiesConnected;
