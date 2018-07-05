**Exploring use of Ontologies with the Ethereum Blockchain**

The main objective here is to get some SPARQL queries that help to understand a distributed applications implementation on the Ethereum blockchain and make it possible to link it with off chain concepts for an end-to-end view.

**Issues**

_Missing Attributes_

These attributes are in the chain data export but were not found in the model:

block_total_difficulty 
block_transaction_count
block_miner


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

https://media.consensys.net/ethon-introducing-semantic-ethereum-15f1f0696986

**Notes**

Git is ignoring the data folder where the input files need to be. Too big to be checking into git.
The location of the chaindata CSV files from the exports is crudely hard coded in the Javascript files.

**Todo's**

Lexical value of blockCreationTime not valid for datatype XSD dateTime

Write out RDF to a .ttl file

---

Declare the prefix's at the top of the ttl output file, like:


@prefix e: <http://ethon.consensys.net/> .
@prefix ibb: <http://knowledge.interition.net/ethereum/mainnet/block#> .
@prefix ibs: <http://knowledge.interition.net/ethereum/mainnet/uncle#> .
@prefix ibu: <http://knowledge.interition.net/ethereum/mainnet/state#> .
@prefix ibtx: <http://knowledge.interition.net/ethereum/mainnet/block_tx_root#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

