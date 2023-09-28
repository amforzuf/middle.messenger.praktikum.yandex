import Block from '.';

export type BlockEvent = Record<string, () => void>;
export type BlockProps = Record<string, unknown>;
export type BlockChildren = Record<string, Block | Block[]>;
