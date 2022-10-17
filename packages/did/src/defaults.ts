import { ZkidDidResolver } from '@zcloak/did-resolver';
import { DidResolver } from '@zcloak/did-resolver/DidResolver';

export const defaultResolver: DidResolver = new ZkidDidResolver();