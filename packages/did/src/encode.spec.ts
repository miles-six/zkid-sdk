import { u8aToHex } from '@polkadot/util';

import { DidDocument } from '@zcloak/did-resolver/types';

import { encodeDidDocument } from './encode';

const DOCUMENT_ONE: DidDocument = {
  '@context': ['https://www.w3.org/ns/did/v1'],
  id: 'did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1',
  controller: ['did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1'],
  verificationMethod: [
    {
      id: 'did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1#key-0',
      controller: ['did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1'],
      type: 'EcdsaSecp256k1VerificationKey2019',
      publicKeyMultibase: 'zgz4zgTUcbvduVZ1Jf3MNMeVeRYP2eiKDJnY7A6PCq3ew'
    },
    {
      id: 'did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1#key-1',
      controller: ['did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1'],
      type: 'X25519KeyAgreementKey2019',
      publicKeyMultibase: 'z13hUFht8HXUi4bmTa6Zz4Mr9j5TXUoRsTtSKnKU6qfR7'
    }
  ],
  authentication: ['did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1#key-0'],
  assertionMethod: ['did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1#key-0'],
  keyAgreement: ['did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1#key-1'],
  capabilityInvocation: ['did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1#key-0'],
  capabilityDelegation: ['did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1#key-0'],
  service: [],
  createdTime: 1666263022530
};

const DOCUMENT_TWO: DidDocument = {
  id: 'did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1',
  controller: ['did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1'],
  '@context': ['https://www.w3.org/ns/did/v1'],
  verificationMethod: [
    {
      id: 'did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1#key-0',
      type: 'EcdsaSecp256k1VerificationKey2019',
      publicKeyMultibase: 'zgz4zgTUcbvduVZ1Jf3MNMeVeRYP2eiKDJnY7A6PCq3ew',
      controller: ['did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1']
    },
    {
      type: 'X25519KeyAgreementKey2019',
      publicKeyMultibase: 'z13hUFht8HXUi4bmTa6Zz4Mr9j5TXUoRsTtSKnKU6qfR7',
      id: 'did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1#key-1',
      controller: ['did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1']
    }
  ],
  authentication: ['did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1#key-0'],
  assertionMethod: ['did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1#key-0'],
  keyAgreement: ['did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1#key-1'],
  service: [],
  capabilityDelegation: ['did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1#key-0'],
  createdTime: 1666263022530,
  capabilityInvocation: ['did:zk:0x11f8b77F34FCF14B7095BF5228Ac0606324E82D1#key-0']
};

const ENCODED =
  '0x68747470733a2f2f7777772e77332e6f72672f6e732f6469642f76316469643a7a6b3a3078313166386237374633344643463134423730393542463532323841633036303633323445383244316469643a7a6b3a3078313166386237374633344643463134423730393542463532323841633036303633323445383244314563647361536563703235366b31566572696669636174696f6e4b6579323031396469643a7a6b3a307831316638623737463334464346313442373039354246353232384163303630363332344538324431236b65792d306469643a7a6b3a3078313166386237374633344643463134423730393542463532323841633036303633323445383244317a677a347a6754556362766475565a314a66334d4e4d6556655259503265694b444a6e593741365043713365775832353531394b657941677265656d656e744b6579323031396469643a7a6b3a307831316638623737463334464346313442373039354246353232384163303630363332344538324431236b65792d316469643a7a6b3a3078313166386237374633344643463134423730393542463532323841633036303633323445383244317a31336855466874384858556934626d5461365a7a344d72396a355458556f52735474534b6e4b5536716652376469643a7a6b3a307831316638623737463334464346313442373039354246353232384163303630363332344538324431236b65792d306469643a7a6b3a307831316638623737463334464346313442373039354246353232384163303630363332344538324431236b65792d306469643a7a6b3a307831316638623737463334464346313442373039354246353232384163303630363332344538324431236b65792d316469643a7a6b3a307831316638623737463334464346313442373039354246353232384163303630363332344538324431236b65792d306469643a7a6b3a307831316638623737463334464346313442373039354246353232384163303630363332344538324431236b65792d300183f503fbc2';

describe('encode did document', (): void => {
  it('encode', (): void => {
    expect(u8aToHex(encodeDidDocument(DOCUMENT_ONE))).toEqual(ENCODED);
  });

  it('encode with same content and different json', (): void => {
    expect(u8aToHex(encodeDidDocument(DOCUMENT_TWO))).toEqual(ENCODED);
  });
});