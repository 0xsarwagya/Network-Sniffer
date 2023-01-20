# Packet Sniffer

This script captures and analyzes network packets on a specified interface using the Scapy library in Python. It uses the argparse module to allow the user to specify the interface on which to sniff packets. The script then uses the Scapy's sniff() function to capture packets on the specified interface. It also uses the HTTPRequest layer to detect HTTP requests and the Raw layer to extract the packet's payload. The script then searches the payload for certain keywords such as "username", "password", "pass", and "email". If any of these keywords are found in the payload, it prints out the payload as it may contain sensitive information such as a username and password.

## How to prevent it?

* Use encryption: One of the most effective ways to prevent packet sniffing is to encrypt the data that is transmitted over the network. This makes it extremely difficult for a packet sniffer to read or understand the data.

* Use a VPN: A virtual private network (VPN) encrypts all data that is transmitted over the network, making it much more difficult for a packet sniffer to read or understand the data.

* Use a Firewall: A firewall can be used to block access to specific ports or IP addresses, which can prevent a packet sniffer from capturing data on the network.

* Avoid Public Wi-Fi: Public Wi-Fi networks are often unsecured, making them easy targets for packet sniffers. Avoid using public Wi-Fi networks whenever possible.

* Keep software up to date: Make sure that all software and devices on the network are up to date with the latest security patches. This will help to prevent vulnerabilities that a packet sniffer could exploit.
