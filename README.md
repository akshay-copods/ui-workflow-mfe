# test-template-mfe


In package.json update the name:
"name" : "NAME_OF_YOUR_APP"

In webpack.config.js make these changes - 

under "output" update this : 
publicPath: ${YOUR PATH} ( by default it will be set to localhost)

under "devServer":
port : ${YOUR_PORT_NUMBER} ( by default it will be set to 3000, change according to your need)

under "ModuleFederationPlugin" update these things: 
name: ${whatever is your app name}
