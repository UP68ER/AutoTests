const selenium = require("selenium-server"),
    chromedriver = require("chromedriver");

module.exports = {
    "src_folders": ["test"],
    "output_folder": "",
    "custom_commands_path": "commands",
    "custom_assertions_path": "",
    "page_objects_path":
     ['pages/CreatingDirectAcc',
      'pages/CreatingDirectAccError'],
    "globals_path": "",
    "selenium": {
        "start_process": true,
        "server_path": selenium.path,
        "log_path": "",
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver": chromedriver.path,
            "webdriver.gecko.driver": "",
            "webdriver.edge.driver": ""
        }
    },
    "test_settings": {
        "default": {
        
            "selenium_port": 4444,
            "selenium_host": "localhost",
            "silent": true,
            "screenshots": {
                "enabled": true,
                "path": "screenshots/",
                "on_failure": true,
                "on_error": true
            },
            "desiredCapabilities": {
                "browserName": "chrome",
                "marionette": true
            }
        },

    }
};
