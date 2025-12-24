import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import * as _ei from 'exupery-core-internals'

import * as d from "../../interface/generated/pareto/schemas/client/data_types/target"

import * as t_backend_location from "../transformers/schemas/server/backend_location"
import { Signature } from "../../interface/algorithms/queries/sort_alphabetically"



// export const $$: _et.Query_Function<d.Sort_Alphabetically_Parameters, d.Replace, null, null> = (
// 	$p,
// ) => _ei.__create_success_refinement_result({
// 	'range': {
// 		'start': $p.position,
// 		'end': $p.position
// 	},
// 	'text': `sort alphabetically at ${$p.position.line}:${$p.position.character}`
// })