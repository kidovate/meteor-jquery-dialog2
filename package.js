Package.describe({
    summary: "jQuery Dialog2 packaged for meteor."
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files([
        'lib/js/jquery.dialog2.js',
        'lib/js/jquery.dialog2.helpers.js',
        'lib/images/ajax-loader.gif',
        'lib/css/jquery.dialog2.css'
    ],'client');
});