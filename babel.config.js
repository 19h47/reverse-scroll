const presets = [
  [
    "@babel/env",
    {
        targets: {
            edge: "17",
            firefox: "60",
            chrome: "67",
            safari: "11.1",
            ie: "11"
        },
		corejs: "2",
        useBuiltIns: "entry",
    },
],
    ];

    const plugins = [];

    module.exports = { presets, plugins };
