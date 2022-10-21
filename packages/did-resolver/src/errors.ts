// Copyright 2021-2022 zcloak authors & contributors
// SPDX-License-Identifier: Apache-2.0

export class InvalidDidError extends Error {
  constructor() {
    super('The DID supplied does not conform to valid syntax.');
  }
}

export class DidNotFoundError extends Error {
  constructor() {
    super('The DID Document not found.');
  }
}

export class RepresentationNotSupportedError extends Error {
  constructor() {
    super('representation not supported.');
  }
}
