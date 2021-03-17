function getReactVersion(source) {
    switch (source) {
        case 'json':
            return { source: source, version: "React Version with data from static JSON files" };
        case 'map':
            return { source: source, version: "React Version with data from a Map repository Spring service" };
        case 'sql':
            return { source: source, version: "React Version with data from a SQL repository Spring service" };
        default:
            throw new Error('Unknown data source: ' + source);
    }
}

export default getReactVersion;
