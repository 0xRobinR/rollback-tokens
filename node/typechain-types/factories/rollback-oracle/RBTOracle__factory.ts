/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  RBTOracle,
  RBTOracleInterface,
} from "../../rollback-oracle/RBTOracle";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "commitment",
        type: "uint256",
      },
    ],
    name: "ProofVerified",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "RBTDeployed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "SahayakRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "SahayakUnregistered",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
    ],
    name: "deployRBT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getReversePeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isRBTtoken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[1]",
        name: "input",
        type: "uint256[1]",
      },
    ],
    name: "submitProof",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "_pA",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "_pB",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "_pC",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[1]",
        name: "_pubSignals",
        type: "uint256[1]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[1]",
        name: "input",
        type: "uint256[1]",
      },
    ],
    name: "verifySahayak",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ce0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631f441cf51461006757806343753b4d14610097578063b02a67c3146100c7578063b61db181146100e5578063d7a6401b14610115578063dedae14d14610145575b600080fd5b610081600480360381019061007c919061069a565b610161565b60405161008e919061071e565b60405180910390f35b6100b160048036038101906100ac919061069a565b610179565b6040516100be919061071e565b60405180910390f35b6100cf6105e2565b6040516100dc9190610752565b60405180910390f35b6100ff60048036038101906100fa91906107cb565b6105ec565b60405161010c919061071e565b60405180910390f35b61012f600480360381019061012a9190610ac8565b61060c565b60405161013c919061071e565b60405180910390f35b61015f600480360381019061015a9190610c1f565b610616565b005b600061016f85858585610179565b9050949350505050565b60006105a6565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181106101b1576000805260206000f35b50565b600060405183815284602082015285604082015260408160608360076107d05a03fa9150816101e7576000805260206000f35b825160408201526020830151606082015260408360808360066107d05a03fa915081610217576000805260206000f35b505050505050565b600060808601600087017f203275d9bb0532314a6bd2f7390bbb8767002e9fc798f94bc19d97c4df0a0aa481527f0b498c954007fbb8e71cd6d3abe801e512380f34fce3bf8b72dc34fe795980e160208201526102c260008801357f05c5e54417a6d5c5f16dea80f7f871fdf3bd88cf2b75321201a2e6ac1f2b97ed7f0fd5d6fe6427507821b8aec3a425a78bb2d1d83c7aa0fd306c1cbb5bf9e27d7c846101b4565b833582527f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4760208501357f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4703066020830152843560408301526020850135606083015260408501356080830152606085013560a08301527f2464dea2e438c136c247dd908b69541420ca238b62d0dd06d00298c7b529da2060c08301527f1be0d2b24775e37a2dff805a03a77d92d9c8f8327562c5563f1eae16f7da6fd160e08301527f2a31c7b3ba5b544c188249c97fd87770ae4fd12a8978b52052c96b91db62421d6101008301527f2f8297df2b2c1403d62c6e11ddb05e1d1e2a0761b497f3349f0294fa4965f21b6101208301527f13bc80607c6883b15e73af6be5d7eca9fd73e09a9771a754f76a059cac8419776101408301527f1526a5b31162468928dbe4b01ca3a40f42f41f6eaf92bc5dcbd373622fa87aac610160830152600088015161018083015260206000018801516101a08301527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed6101c08301527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c26101e08301527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa6102008301527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b610220830152853561024083015260208601356102608301527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed6102808301527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c26102a08301527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa6102c08301527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b6102e08301526020826103008460086107d05a03fa82518116935050505095945050505050565b60405161038081016040526105be6000840135610180565b6105cb6020840135610180565b6105d8818486888a61021f565b8060005260206000f35b6000610a8c905090565b60006020528060005260406000206000915054906101000a900460ff1681565b6000949350505050565b505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000819050826020600202820111156106505761064f61062f565b5b92915050565b6000819050826040600202820111156106725761067161062f565b5b92915050565b6000819050826020600102820111156106945761069361062f565b5b92915050565b60008060008061012085870312156106b5576106b4610625565b5b60006106c387828801610634565b94505060406106d487828801610656565b93505060c06106e587828801610634565b9250506101006106f787828801610678565b91505092959194509250565b60008115159050919050565b61071881610703565b82525050565b6000602082019050610733600083018461070f565b92915050565b6000819050919050565b61074c81610739565b82525050565b60006020820190506107676000830184610743565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107988261076d565b9050919050565b6107a88161078d565b81146107b357600080fd5b50565b6000813590506107c58161079f565b92915050565b6000602082840312156107e1576107e0610625565b5b60006107ef848285016107b6565b91505092915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610846826107fd565b810181811067ffffffffffffffff821117156108655761086461080e565b5b80604052505050565b600061087861061b565b9050610884828261083d565b919050565b600067ffffffffffffffff8211156108a4576108a361080e565b5b602082029050919050565b6108b881610739565b81146108c357600080fd5b50565b6000813590506108d5816108af565b92915050565b60006108ee6108e984610889565b61086e565b905080602084028301858111156109085761090761062f565b5b835b81811015610931578061091d88826108c6565b84526020840193505060208101905061090a565b5050509392505050565b600082601f8301126109505761094f6107f8565b5b600261095d8482856108db565b91505092915050565b600067ffffffffffffffff8211156109815761098061080e565b5b602082029050919050565b600061099f61099a84610966565b61086e565b905080604084028301858111156109b9576109b861062f565b5b835b818110156109e257806109ce888261093b565b8452602084019350506040810190506109bb565b5050509392505050565b600082601f830112610a0157610a006107f8565b5b6002610a0e84828561098c565b91505092915050565b600067ffffffffffffffff821115610a3257610a3161080e565b5b602082029050919050565b6000610a50610a4b84610a17565b61086e565b90508060208402830185811115610a6a57610a6961062f565b5b835b81811015610a935780610a7f88826108c6565b845260208401935050602081019050610a6c565b5050509392505050565b600082601f830112610ab257610ab16107f8565b5b6001610abf848285610a3d565b91505092915050565b6000806000806101208587031215610ae357610ae2610625565b5b6000610af18782880161093b565b9450506040610b02878288016109ec565b93505060c0610b138782880161093b565b925050610100610b2587828801610a9d565b91505092959194509250565b600080fd5b600067ffffffffffffffff821115610b5157610b5061080e565b5b610b5a826107fd565b9050602081019050919050565b82818337600083830152505050565b6000610b89610b8484610b36565b61086e565b905082815260208101848484011115610ba557610ba4610b31565b5b610bb0848285610b67565b509392505050565b600082601f830112610bcd57610bcc6107f8565b5b8135610bdd848260208601610b76565b91505092915050565b600060ff82169050919050565b610bfc81610be6565b8114610c0757600080fd5b50565b600081359050610c1981610bf3565b92915050565b600080600060608486031215610c3857610c37610625565b5b600084013567ffffffffffffffff811115610c5657610c5561062a565b5b610c6286828701610bb8565b935050602084013567ffffffffffffffff811115610c8357610c8261062a565b5b610c8f86828701610bb8565b9250506040610ca086828701610c0a565b915050925092509256fea26469706673582212202ed2177f70dd9ed6f0c7a0ba430420a89b7a4d7057f69d28d497a97eb992849d64736f6c63430008180033";

type RBTOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RBTOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RBTOracle__factory extends ContractFactory {
  constructor(...args: RBTOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      RBTOracle & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): RBTOracle__factory {
    return super.connect(runner) as RBTOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RBTOracleInterface {
    return new Interface(_abi) as RBTOracleInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): RBTOracle {
    return new Contract(address, _abi, runner) as unknown as RBTOracle;
  }
}
