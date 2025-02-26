function ipv4Parser(ip, mask) {
    let ipParts = ip.split('.').map(Number);
    let maskParts = mask.split('.').map(Number);

    let networkBlock = ipParts.map((octet, i) => octet & maskParts[i]).join('.');
    let hostIdentifier = ipParts.map((octet, i) => octet - (octet & maskParts[i])).join('.');

    return [networkBlock, hostIdentifier];
}