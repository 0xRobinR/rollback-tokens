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
  MYVerifier,
  MYVerifierInterface,
} from "../../verifier.sol/MYVerifier";

const _abi = [
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061060e806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806343753b4d14610030575b600080fd5b61004a60048036038101906100459190610539565b610060565b60405161005791906105bd565b60405180910390f35b600061048d565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018110610098576000805260206000f35b50565b600060405183815284602082015285604082015260408160608360076107d05a03fa9150816100ce576000805260206000f35b825160408201526020830151606082015260408360808360066107d05a03fa9150816100fe576000805260206000f35b505050505050565b600060808601600087017f1740b5f409a22d9eb36f5ca556caec96fa146b27152315284d7ae2e839c0979581527f05bf42f6c8ac2f862a6153c65cb1c4918930fa38c3db46b38c9d2443ac867d9c60208201526101a960008801357f0e959a322b16a1063d6fac271bed56a1ce5d72428548681382a34042c78241e87f1e6678c7e7cca2bfb5547feaecf14fd12e9d1a5d38c5f2c26111c55748db73858461009b565b833582527f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4760208501357f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4703066020830152843560408301526020850135606083015260408501356080830152606085013560a08301527f0e8cd77fd63d378b31d211c013512820f0ab416b018a964be00e4e3bebbd778960c08301527f2518b1ca7af89e52b970981f21bb9edbede6fab03f466dbdd9c1fe3b273f686860e08301527f25ade6190a80975ee7cf3627d7b86c3791966f80f8247ee994ba5d6a3046376c6101008301527f17fe2820781455626dc71a78b92d3186a527a72f46d482511eb75b6657d05ed06101208301527f16c5dbbe5a59f0d6f6b21eff460985464907379862f43ccb4285f6d4fb4a47d86101408301527f01c1488f32374acf30ff1d815291a81cc267fc606850a49ffb59754b2ab98be4610160830152600088015161018083015260206000018801516101a08301527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c26101c08301527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed6101e08301527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b6102008301527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa610220830152853561024083015260208601356102608301527f1ca4831cde047e2c369453eb1e81d383baf667f2a97c45eb2bf11e0d0cc58ce46102808301527f08ef6afb54647eaa1b3469afbba25f98e9f9b879289d653a19c503d57cb4e2646102a08301527f2b61be9f689e88c44ce1fb1a12049d08bda1955894f088699c2bc348d5177dd16102c08301527f2739ee402a20920844627b62d1889a180c21b0bf01bbf4e6d3093ab6a498e0c36102e08301526020826103008460086107d05a03fa82518116935050505095945050505050565b60405161038081016040526104a56000840135610067565b6104b26020840135610067565b6104bf818486888a610106565b8060005260206000f35b600080fd5b600080fd5b6000819050826020600202820111156104ef576104ee6104ce565b5b92915050565b600081905082604060020282011115610511576105106104ce565b5b92915050565b600081905082602060010282011115610533576105326104ce565b5b92915050565b6000806000806101208587031215610554576105536104c9565b5b6000610562878288016104d3565b9450506040610573878288016104f5565b93505060c0610584878288016104d3565b92505061010061059687828801610517565b91505092959194509250565b60008115159050919050565b6105b7816105a2565b82525050565b60006020820190506105d260008301846105ae565b9291505056fea2646970667358221220f180616d49840845cb46e2dd1931628d65e0e70641319eff7ceec64c2213fd3464736f6c63430008180033";

type MYVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MYVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MYVerifier__factory extends ContractFactory {
  constructor(...args: MYVerifierConstructorParams) {
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
      MYVerifier & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MYVerifier__factory {
    return super.connect(runner) as MYVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MYVerifierInterface {
    return new Interface(_abi) as MYVerifierInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MYVerifier {
    return new Contract(address, _abi, runner) as unknown as MYVerifier;
  }
}
