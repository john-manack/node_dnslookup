const dns = require('dns');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question("Domain Name:", domain => {
    readline.close();
    dns.lookup(domain, function (error, address) {
        if (error) {
            console.log(error.message);
        }
        else {
            console.log(`IP Address: ${address}`);
        }
    })});