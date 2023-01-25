# Pin files on IPFS

It is recommended to store your file son multiple nodes for better availability. 

## Filebase

Filebase.com offers free accounts up to 5 GB.

## Storj

https://www.storj.io/ipfs

With Storj, you can not re-pin files by CID, but you can re-upload the same files with a small script `pin_storj.sh`

## NFT.storage

https://nft.storage/docs/how-to/pinning-service/

## IPFS node

> Running a node by yourself probably won't be enough. Public gateways will have issues finding your content, so I recommend to use pinning services too.

### Config

#### Making the gateway public

Change the listening ip to 0.0.0.0: `"Gateway": "/ip4/0.0.0.0/tcp/8080",`

#### Max storage

`"StorageMax": "35GB"`

#### Bootstrap

I'm not sure if it has any effect on seeding files, but I tried to connect to public gateways anyway:

```
  "Bootstrap": [
    "/dnsaddr/node-1.ingress.cloudflare-ipfs.com/p2p/QmcFf2FH3CEgTNHeMRGhN7HNHU1EXAxoEk6EFuSyXCsvRE",
    "/dnsaddr/bootstrap.libp2p.io/p2p/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa",
    "/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb",
    "/dnsaddr/bootstrap.libp2p.io/p2p/QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt",
    "/ip4/104.131.131.82/tcp/4001/p2p/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ",
    "/ip4/104.131.131.82/udp/4001/quic/p2p/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ",
    "/dnsaddr/bootstrap.libp2p.io/p2p/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN",
    "/dnsaddr/node-1.ingress.cloudflare-ipfs.com/p2p/QmcFf2FH3CEgTNHeMRGhN7HNHU1EXAxoEk6EFuSyXCsvRE",
    "/dnsaddr/node-2.ingress.cloudflare-ipfs.com/p2p/QmcFmLd5ySfk2WZuJ1mfSWLDjdmHZq7rSAua4GoeSQfs1z",
    "/dnsaddr/node-3.ingress.cloudflare-ipfs.com/p2p/QmcfFmzSDVbwexQ9Au2pt5YEXHK5xajwgaU6PpkbLWerMa",
    "/dnsaddr/node-4.ingress.cloudflare-ipfs.com/p2p/QmcfJeB3Js1FG7T8YaZATEiaHqNKVdQfybYYkbT1knUswx",
    "/dnsaddr/node-5.ingress.cloudflare-ipfs.com/p2p/QmcfVvzK4tMdFmpJjEKDUoqRgP4W9FnmJoziYX5GXJJ8eZ",
    "/dnsaddr/node-6.ingress.cloudflare-ipfs.com/p2p/QmcfZD3VKrUxyP9BbyUnZDpbqDnT7cQ4WjPP8TRLXaoE7G",
    "/dnsaddr/node-7.ingress.cloudflare-ipfs.com/p2p/QmcfZP2LuW4jxviTeG8fi28qjnZScACb8PEgHAc17ZEri3",
    "/dnsaddr/node-8.ingress.cloudflare-ipfs.com/p2p/QmcfgsJsMtx6qJb74akCw1M24X1zFwgGo11h1cuhwQjtJP",
    "/dnsaddr/node-9.ingress.cloudflare-ipfs.com/p2p/Qmcfr2FC7pFzJbTSDfYaSy1J8Uuy8ccGLeLyqJCKJvTHMi",
    "/dnsaddr/node-10.ingress.cloudflare-ipfs.com/p2p/QmcfR3V5YAtHBzxVACWCzXTt26SyEkxdwhGJ6875A8BuWx",
    "/dnsaddr/node-11.ingress.cloudflare-ipfs.com/p2p/Qmcfuo1TM9uUiJp6dTbm915Rf1aTqm3a3dnmCdDQLHgvL5",
    "/dnsaddr/node-12.ingress.cloudflare-ipfs.com/p2p/QmcfV2sg9zaq7UUHVCGuSvT2M2rnLBAPsiE79vVyK3Cuev",
    "/ip4/139.178.68.217/tcp/6744/p2p/12D3KooWCVXs8P7iq6ao4XhfAmKWrEeuKFWCJgqe9jGDMTqHYBjw",
    "/dns4/elastic.dag.house/tcp/443/wss/p2p/bafzbeibhqavlasjc7dvbiopygwncnrtvjd2xmryk5laib7zyjor6kf3avm",
    "/dnsaddr/fra1-1.hostnodes.pinata.cloud/p2p/QmWaik1eJcGHq1ybTWe7sezRfqKNcDRNkeBaLnGwQJz1Cj",
    "/dnsaddr/fra1-2.hostnodes.pinata.cloud/p2p/QmNfpLrQQZr5Ns9FAJKpyzgnDL2GgC6xBug1yUZozKFgu4",
    "/dnsaddr/fra1-3.hostnodes.pinata.cloud/p2p/QmPo1ygpngghu5it8u4Mr3ym6SEU2Wp2wA66Z91Y1S1g29",
    "/dnsaddr/nyc1-1.hostnodes.pinata.cloud/p2p/QmRjLSisUCHVpFa5ELVvX3qVPfdxajxWJEHs9kN3EcxAW6",
    "/dnsaddr/nyc1-2.hostnodes.pinata.cloud/p2p/QmPySsdmbczdZYBpbi2oq2WMJ8ErbfxtkG8Mo192UHkfGP",
    "/dnsaddr/nyc1-3.hostnodes.pinata.cloud/p2p/QmSarArpxemsPESa6FNkmuu9iSE1QWqPX2R3Aw6f5jq4D5",
    "/dns/cluster0.fsn.dwebops.pub/p2p/QmUEMvxS2e7iDrereVYc5SWPauXPyNwxcy9BXZrC1QTcHE",
    "/dns/cluster1.fsn.dwebops.pub/p2p/QmNSYxZAiJHeLdkBg38roksAR9So7Y5eojks1yjEcUtZ7i",
    "/dns/cluster2.fsn.dwebops.pub/p2p/QmUd6zHcbkbcs7SMxwLs48qZVX3vpcM8errYS7xEczwRMA",
    "/dns/cluster3.fsn.dwebops.pub/p2p/QmdnXwLrC8p1ueiq2Qya8joNvk3TVVDAut7PrikmZwubtR",
    "/dns/cluster4.fsn.dwebops.pub/p2p/12D3KooWCRscMgHgEo3ojm8ovzheydpvTEqsDtq7Vby38cMHrYjt",
    "/dns4/nft-storage-dc13.nft.dwebops.net/tcp/18402/p2p/12D3KooWQtpvNvUYFzAo1cRYkydgk15JrMSHp6B6oujqgYSnvsVm",
    "/dns4/nft-storage-sv15.nft.dwebops.net/tcp/18402/p2p/12D3KooWQcgCwNCTYkyLXXQSZuL5ry1TzpM8PRe9dKddfsk1BxXZ",
    "/ip4/147.75.33.191/tcp/4001/p2p/12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW"
  ],
  ```

#### Peering

Added clients from https://developers.cloudflare.com/web3/ipfs-gateway/reference/peering-with-content-providers/

#### Swarm limits

I tried to increase limits, but then got other limit issues (peer incoming connection limit) so I decided to turn off the whole module for now.

```
    "ResourceMgr": {
      "Enabled": false,
      "Limits": {
        "System": {
          "ConnsInbound": 1048576,
          "Memory": 6442450944
        },
        "Transient": {
          "ConnsInbound": 1024
        }
      }
    },
```