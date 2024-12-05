/*
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {createPlugin} from "../../utils/PluginsUtils";

/**
 * Footer plugin, section of the homepage.
 * description of footer can be overridden by
 * `home.footerDescription` message id in the translations
 * @prop {object} cfg.logo logo data to change image and href, set to null to hide the logo
 * @prop {string} cfg.logo.src source of the logo
 * @prop {number|string} cfg.logo.width width of the logo image
 * @prop {number|string} cfg.logo.height height of the logo image
 * @prop {string} cfg.logo.title title of the logo image
 * @prop {string} cfg.logo.alt alternative text of the logo image
 * @memberof plugins
 * @class
 * @name Footer
 */

class Footer extends React.Component {
    render() {
        return (
            <div className="footer2" id="footer2"><p className="text-center">© 2024 CID. Tous droits réservés.</p></div>
        );
    }
}

const FooterPlugin = createPlugin('Footer', {
    component: Footer
});

export default FooterPlugin;
