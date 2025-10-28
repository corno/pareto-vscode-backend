import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d from "../../../interface/generated/pareto/schemas/client/data_types/target"

import * as t_backend_location from "../../transformations/server/backend_location"


export const $$: _easync.Unguaranteed_Query_Initializer<d.Sort_Alphabetically_Parameters, d.Replace, null> = (
	$p,
) => _easync.query.unguaranteed['create result']({
	'range': {
		'start': $p.position,
		'end': $p.position
	},
	'text': `sort alphabetically at ${$p.position.line}:${$p.position.character}`
})