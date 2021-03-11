import { TRANSACTIONS } from '@wavesenterprise/transactions-factory'
import { preReissue, postReissue, postSignReissue } from "./transforms/reissue"
import { preIssue, postIssue, postSignIssue } from "./transforms/issue"
import {
  preTransfer, postTransfer, postSignTransfer,
  preTransferV3, postTransferV3, postSignTransferV3
} from "./transforms/transfer"
import { preLease, postLease, postSignLease } from './transforms/lease'
import { preCancelLeasing, postCancelLeasing } from './transforms/lease-cancel'
import { preBurn, postBurn, postSignBurn } from './transforms/burn'
import { preCreateAlias, postCreateAlias } from './transforms/alias'
import {
  preMassTransfer,
  postMassTransfer,
  preMassTransferV2,
  postMassTransferV2
} from './transforms/mass-transfer'
import { preData, postData, postSignData } from './transforms/data'
import { preSetScript, postSetScript } from './transforms/set-script'
import { preSponsorship, postSponsorship } from './transforms/sponsorship'
import { prePermit, postPermit, prePermitV2, postPermitV2 } from './transforms/permission'
import {
  preDockerCreate, postDockerCreate,
  preDockerCreateV2, postDockerCreateV2,
  preDockerCreateV3, postDockerCreateV3
} from './transforms/docker-create'
import {
  preDockerCall, postDockerCall,
  preDockerCallV2, postDockerCallV2,
  preDockerCallV3, postDockerCallV3,
  preDockerCallV4, postDockerCallV4
} from './transforms/docker-call'
import { preDockerDisable, postDockerDisable, preDockerDisableV3, postDockerDisableV3 } from './transforms/docker-disable'
import { preDockerUpdateV2, postDockerUpdateV2, preDockerUpdateV3, postDockerUpdateV3 } from './transforms/docker-update'
import { preNodeRegistry, postNodeRegistry } from './transforms/register-node'
import {
  prePolicyCreate, postPolicyCreate,
  prePolicyCreateV3, postPolicyCreateV3
} from './transforms/policy-create'
import { preUpdatePolicy, postUpdatePolicy, preUpdatePolicyV3, postUpdatePolicyV3 } from './transforms/policy-update'

type TRANSFORMS_TYPES = {
  [key in keyof typeof TRANSACTIONS]?: {
    [key1 in keyof typeof TRANSACTIONS[key]]?: {
      pre: (data: object) => Promise<object>,
      post: (data: object) => object,
      postSign?: (data: object) => object,
    }
  }
}

const TRANSFORMS: TRANSFORMS_TYPES = {}

Object.keys(TRANSACTIONS).forEach(key => {
  TRANSFORMS[key] = {}
  Object.keys(TRANSACTIONS[key]).forEach(key1 => {
    TRANSFORMS[key][key1] = {}
  })
})

/* ISSUE */

// TODO issue no script
TRANSFORMS.Issue.V2 = {
  pre: preIssue,
  post: postIssue,
  postSign: postSignIssue,
}

/* TRANSFER */

TRANSFORMS.Transfer.V2 = {
  pre: preTransfer,
  post: postTransfer,
  postSign: postSignTransfer
}

/* TRANSFER V3 */

TRANSFORMS.Transfer.V3 = {
  pre: preTransferV3,
  post: postTransferV3,
  postSign: postSignTransferV3
}

/* REISSUE */

TRANSFORMS.Reissue.V2 = {
  pre: preReissue,
  post: postReissue,
  postSign: postSignReissue
}

/* BURN */

TRANSFORMS.Burn.V2 = {
  pre: preBurn,
  post: postBurn,
  postSign: postSignBurn,
}

/* LEASE */

TRANSFORMS.Lease.V2 = {
  pre: preLease,
  post: postLease,
  postSign: postSignLease,
}

/* CANCEL LEASING */

TRANSFORMS.LeaseCancel.V2 = {
  pre: preCancelLeasing,
  post: postCancelLeasing
}

/* CREATE ALIAS */

TRANSFORMS.CreateAlias.V2 = {
  pre: preCreateAlias,
  post: postCreateAlias
}

/* MASS TRANSFER */

TRANSFORMS.MassTransfer.V1 = {
  pre: preMassTransfer,
  post: postMassTransfer
}

TRANSFORMS.MassTransfer.V2 = {
  pre: preMassTransferV2,
  post: postMassTransferV2
}

/* DATA */

TRANSFORMS.Data.V1 = {
  pre: preData,
  post: postData,
  postSign: postSignData
}

/* SET SCRIPT */

TRANSFORMS.SetScript.V1 = {
  pre: preSetScript,
  post: postSetScript
}

/* SPONSORSHIP */

TRANSFORMS.SponsorFee.V1 = {
  pre: preSponsorship,
  post: postSponsorship
}

/* PERMISSION */

TRANSFORMS.Permit.V1 = {
  pre: prePermit,
  post: postPermit
}

TRANSFORMS.Permit.V2 = {
  pre: prePermitV2,
  post: postPermitV2
}

/* DOCKER CREATE */

TRANSFORMS.CreateContract.V1 = {
  pre: preDockerCreate,
  post: postDockerCreate
}

TRANSFORMS.CreateContract.V2 = {
  pre: preDockerCreateV2,
  post: postDockerCreateV2
}

TRANSFORMS.CreateContract.V3 = {
  pre: preDockerCreateV3,
  post: postDockerCreateV3
}

/* DOCKER CALL */

TRANSFORMS.CallContract.V1 = {
  pre: preDockerCall,
  post: postDockerCall
}

TRANSFORMS.CallContract.V2 = {
  pre: preDockerCallV2,
  post: postDockerCallV2
}

TRANSFORMS.CallContract.V3 = {
  pre: preDockerCallV3,
  post: postDockerCallV3
}

TRANSFORMS.CallContract.V4 = {
  pre: preDockerCallV4,
  post: postDockerCallV4
}

/* DOCKER DISABLE */

TRANSFORMS.DisableContract.V1 = {
  pre: preDockerDisable,
  post: postDockerDisable
}

TRANSFORMS.DisableContract.V3 = {
  pre: preDockerDisableV3,
  post: postDockerDisableV3
}

/* DOCKER UPDATE */


TRANSFORMS.UpdateContract.V2 = {
  pre: preDockerUpdateV2,
  post: postDockerUpdateV2
}

TRANSFORMS.UpdateContract.V3 = {
  pre: preDockerUpdateV3,
  post: postDockerUpdateV3
}

/* REGISTRY */

TRANSFORMS.RegisterNode.V1 = {
  pre: preNodeRegistry,
  post: postNodeRegistry
}

/* POLICY CREATE */

TRANSFORMS.CreatePolicy.V1 = {
  pre: prePolicyCreate,
  post: postPolicyCreate
}

TRANSFORMS.CreatePolicy.V3 = {
  pre: prePolicyCreateV3,
  post: postPolicyCreateV3
}

/* POLICY UPDATE */

TRANSFORMS.UpdatePolicy.V1 = {
  pre: preUpdatePolicy,
  post: postUpdatePolicy
}

TRANSFORMS.UpdatePolicy.V3 = {
  pre: preUpdatePolicyV3,
  post: postUpdatePolicyV3
}

export default TRANSFORMS
