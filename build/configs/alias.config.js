const path = require('path')

const root = path.join(__dirname, '..', '..')
    , src = path.join(root, 'src')
    , app = path.join(src, 'app')
    , assets = path.join(src, 'assets')
    , config = path.join(src, 'config')
    , router = path.join(src, 'router')
    , services = path.join(src, 'services')
    , store = path.join(src, 'store')
    , utils = path.join(src, 'utils')

module.exports = {
    // root
    _root: root,

    // node modules
    _npm: path.join(root, 'node_modules'),

    // src
    _src: src,
        _app: app,
            _app_commons: path.join(app, 'commons'),
                _directives: path.join(app, 'commons', 'directives'),
                _filters: path.join(app, 'commons', 'filters'),
                _mixins: path.join(app, 'commons', 'mixins'),
            _components: path.join(app, 'components'),
                _commons: path.join(app, 'components', 'commons'),
            _views: path.join(app, 'views'),
        _assets: assets,
            _images: path.join(assets, 'images'),
            _scss: path.join(assets, 'scss'),
                _scss_components: path.join(assets, 'scss', 'components'),
                _scss_config: path.join(assets, 'scss', 'config'),
        _config: config,
        _router: router,
        _services: services,
            _services_client: path.join(services, 'client'),
            _services_http: path.join(services, 'http'),
        _store: store,
        _utils: utils
}
