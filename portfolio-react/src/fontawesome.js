import { config, library } from '@fortawesome/fontawesome-svg-core';

import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faHome, faCog, faUser, faAt, faPlus, faAngleLeft, faAngleRight, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

// Disable auto css insertion to prevent CSP error.
// See: https://fontawesome.com/how-to-use/javascript-api/methods/dom-css
import "./css/fontawesome-svg-core.css";

config.autoAddCss = false;

// Create icon library.

library.add(
    faHome,
    faCog,
    faUser,
    faAt,
    faLinkedin,
    faGithubSquare,
    faTwitterSquare,
    faPlus,
    faEdit,
    faTrashAlt,
    faAngleLeft,
    faAngleRight,
    faAngleUp,
    faAngleDown
);

