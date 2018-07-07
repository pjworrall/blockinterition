**Exploring use of Ontologies with the Ethereum Blockchain**

The main objective here is to get some SPARQL queries that help to understand a distributed applications implementation on the Ethereum blockchain and make it possible to link it with off chain concepts for an end-to-end view.

Example:

```
   prefix ethon: <http://ethon.consensys.net/>
   
   prefix ibb: <http://knowledge.interition.net/ethereum/mainnet/block#>
   prefix ibs: <http://knowledge.interition.net/ethereum/mainnet/uncle#>
   prefix ibu: <http://knowledge.interition.net/ethereum/mainnet/state#>
   prefix ibtx: <http://knowledge.interition.net/ethereum/mainnet/block_tx_root#>
   
   prefix xsd: <http://www.w3.org/2001/XMLSchema#>
   
   SELECT ?block  ?number ?parentBlock
   WHERE {
     ?block ethon:number ?number ;
               ethon:blockHash ?blockHash ;
               ethon:hasParentBlock ?parentBlock .
   
   }
   LIMIT 25
   ```


**Documentation**

Go and subscribe to the [Interition Youtube channel](https://www.youtube.com/user/interition?sub_confirmation=1) to get regular instructional material

VLOG 17: [Querying the Ethereum Blockchain using the EthOn Ontology](https://youtu.be/ETcEs_affho?sub_confirmation=1)

VLOG 19: [Materialising EthOn Ontology Transactions](https://youtu.be/uoxftj0k2Mw?sub_confirmation=1)


**Prerequisites**


Node.js v9.5.0 (should work with current version from https://nodejs.org/en/)

BlockInterition (this project) (git clone https://github.com/pjworrall/blockinterition.git) 

Apache Jena 3.7.0 [ARQ](https://jena.apache.org/)


**Usage**

To produce triples using the EthOn Ontology for Blocks:

% cd scripts

\# usage: node tripleize.js --data \<input-file\>  --map \<mapping-file\> --template \<template-file\>

% node tripleize.js --data ../data/input/fragments/blocks.csv --map ../map/block.map --template ../templates/block.tmp > 


% cd ..

% cat  data/headers.ttl tmp/blocks.ttl > data/output/blocks.ttl

% cd tests

\# ./query.sh [sparql.qr]

\# make sure query.sh is executable (chmod u+x)

% ./query.sh blocks.qr


**Issues**

_Missing Attributes_

These attributes are in the chain data export but were not found in the model:


Block data

1. block_total_difficulty 
2. block_transaction_count
3. block_miner

The CSV file from the ETC has the following columns:

block_number,block_hash,block_parent_hash,block_nonce,block_sha3_uncles,block_logs_bloom,block_transactions_root,block_state_root,block_miner,block_difficulty,block_total_difficulty,block_size,block_extra_data,block_gas_limit,block_gas_used,block_timestamp,block_transaction_count

Transaction data

1. tx_from
2. tx_to
3. tx_value
4. tx_block_hash

..and others

The CSV file from the ETC has the following columns:

tx_hash,tx_nonce,tx_block_hash,tx_block_number,tx_index,tx_from,tx_to,tx_value,tx_gas,tx_gas_price,tx_input

_Blank Nodes_

I was thinking of using blank nodes for the instances of blocks but chose to define a uri pattern with
the block number placed at the fragements/named anchor .

**Tools**

_ETL_

To produce the CSV input files we referred to:

https://medium.com/@medvedev1088/exporting-and-analyzing-ethereum-blockchain-f5353414a94e
https://medium.com/@medvedev1088/converting-ethereum-etl-files-to-parquet-399e048ddd30
https://github.com/medvedev1088/ethereum-etl

**Ontology**

[Medium Article](https://media.consensys.net/ethon-introducing-semantic-ethereum-15f1f0696986)

[EthOn Ontology](https://github.com/ConsenSys/EthOn)

**Notes**

Git is ignoring the data folder where the input files need to be. Too big to be checking into git.
The location of the chaindata CSV files from the exports is crudely hard coded in the Javascript files.

Smaller csv extracts are checked into data/input/fragments so the scripts and queries can be operated without having to setup an Ethereum node and produce the data yourself. 

**Todo's**

Lexical value of blockCreationTime not valid for datatype XSD dateTime

Write out RDF to a .ttl file

Find out why tx_from, tx_to, tx_value data elements in the etl input have no properties for Tx Classes in EthOn

---

Declare the prefix's at the top of the ttl output file, like:


@prefix e: <http://ethon.consensys.net/> .

@prefix ibb: <http://knowledge.interition.net/ethereum/mainnet/block#> .

@prefix ibs: <http://knowledge.interition.net/ethereum/mainnet/uncle#> .

@prefix ibu: <http://knowledge.interition.net/ethereum/mainnet/state#> .

@prefix ibtx: <http://knowledge.interition.net/ethereum/mainnet/block_tx_root#> .

@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

