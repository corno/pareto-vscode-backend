import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d from "../client_data_types"

import * as t_backend_location from "../transformations/backend_location"


export const $$ = (
	$p: {
		'content': string
		'position': d.Position
	},
): _easync.Unguaranteed_Query_Result<d.Replace, null> => _easync.query.unguaranteed['create result']({
	'range': {
		'start': $p.position,
		'end': $p.position
	},
	'text': `sort alphabetically at ${$p.position.line}:${$p.position.character}`
})