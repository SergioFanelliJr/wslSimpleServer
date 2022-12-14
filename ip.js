import os from 'os';

const interfaces = os.networkInterfaces();

export function getIpNumber (){
    return interfaces.eth0[0].address;
}
