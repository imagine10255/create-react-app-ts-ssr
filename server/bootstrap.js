require('ignore-styles');

require('@babel/register')({
    "presets": [
        ["react-app", { "flow": false, "typescript": true }],
    ],
    "plugins": [
        "@babel/plugin-transform-modules-commonjs",
        [
            "transform-assets",
            {
                "extensions": [
                    "css",
                    "svg"
                ],
                "name": "static/media/[name].[hash:8].[ext]"
            }
        ]
    ]
});

require('./index');
