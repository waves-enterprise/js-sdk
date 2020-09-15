export type TConsensus = 'pos' | 'poa'

export interface IPeers {
    address: string,
    declaredAddress: string,
    peerName: string,
    peerNonce: number,
    applicationName: string,
    applicationVersion: string,
    applicationConsensus: TConsensus
}