const pcap = require('pcap');
const pcapSession = pcap.createSession('en0', 'tcp');

pcapSession.on('packet', function(rawPacket) {
  const packet = pcap.decode.packet(rawPacket);
  
  if (packet.link.ip.tcp.dstport === 80) {
    console.log('HTTP Request:', packet.link.ip.tcp.data.toString());
  }
});
